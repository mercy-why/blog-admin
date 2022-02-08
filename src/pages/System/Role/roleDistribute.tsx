import ProCard from '@ant-design/pro-card';
import React, { useState, useEffect } from 'react';
import { Tree, Button, message, Space, Tag } from 'antd';
import { getPermissionTree, getPermissionTreeByRoleId, distributePermissions } from '../services';
import { useRequest, useParams, useHistory } from 'ice';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface PermissionItem {
  permissionId: string;
  permissionName: string;
  type: string;
  children?: PermissionItem[];
}

const loopPermissionId = (PermissionList: PermissionItem[], arr: string[] = []) => {
  PermissionList &&
    PermissionList.forEach((item) => {
      if (!item.children) {
        arr.push(item.permissionId);
      } else {
        loopPermissionId(item.children, arr);
      }
    });
  return arr;
};
const loopExpendPermissionId = (PermissionList: PermissionItem[], arr: string[] = []) => {
  PermissionList &&
    PermissionList.forEach((item) => {
      arr.push(item.permissionId);
      if (item.children) {
        loopExpendPermissionId(item.children);
      }
    });
  return arr;
};
const loopAllPermissionId = (PermissionList: PermissionItem[], arr: string[] = []) => {
  PermissionList &&
    PermissionList.forEach((item) => {
      arr.push(item.permissionId);
      if (item.children) {
        loopAllPermissionId(item.children, arr);
      }
    });
  return arr;
};

export default function DisturbList() {
  const history = useHistory();
  const statusMap = {
    C: {
      color: 'blue',
      text: '目录',
    },
    M: {
      color: 'green',
      text: '菜单',
    },
    F: {
      color: 'volcano',
      text: '功能',
    },
    B: {
      color: '',
      text: '按钮',
    },
  };
  const [PermissionKeys, setPermissionKeys] = useState<React.Key[]>([]);
  const [savePermissionKeys, setSavePermissionKeys] = useState<React.Key[]>([]);
  const [PermissionStatus, setPermissionStatus] = useState(true);
  const [PermissionExpendKeys, setPermissionExpendKeys] = useState<React.Key[]>([]);

  const { id } = useParams<{ id: string }>();
  const { data: PermissionTreeData, loading: PermissionLoading } = useRequest(getPermissionTree, {
    manual: false,
  });
  const { data: roleInfo } = useRequest<PermissionItem[]>(() => getPermissionTreeByRoleId({ roleId: id }), {
    manual: false,
  });
  const { loading: setBtnLoading, request: SetPermissionReq } = useRequest(distributePermissions);
  const onCheck = (checkedKeys: React.Key[], info: any) => {
    setPermissionKeys([...checkedKeys]);
    setSavePermissionKeys([...checkedKeys, ...info.halfCheckedKeys]);
    setPermissionStatus(false);
  };
  const savePermission = async () => {
    const permissionIds = savePermissionKeys.join();
    await SetPermissionReq({
      permissionIds,
      roleId: id,
    });
    message.success('菜单权限分配成功');
    setPermissionStatus(true);
  };
  const chooseAll = () => {
    const keys = PermissionTreeData.map((x) => x.permissionId);
    setPermissionKeys(keys);
    setSavePermissionKeys(loopAllPermissionId(PermissionTreeData));
    setPermissionStatus(false);
  };

  const expendAllPermission = () => {
    if (PermissionExpendKeys.length === 0) {
      setPermissionExpendKeys(loopExpendPermissionId(PermissionTreeData));
    } else {
      setPermissionExpendKeys([]);
    }
  };

  useEffect(() => {
    if (roleInfo) {
      setPermissionKeys(loopPermissionId(roleInfo));
    }
  }, [roleInfo]);
  return (
    <ProCard
      className="main-card"
      headerBordered
      bordered
      loading={PermissionLoading}
      title={
        <span onClick={history.goBack} className="c-title-x">
          <ArrowLeftOutlined />
          <span className="c-title">权限分配</span>
        </span>
      }
      extra={
        <Space size={20}>
          <a onClick={expendAllPermission}>{`${PermissionExpendKeys.length === 0 ? '展开' : '收起'}全部`}</a>
          <a onClick={chooseAll}>全选</a>
          <Button type="primary" onClick={savePermission} loading={setBtnLoading} disabled={PermissionStatus}>
            保存
          </Button>
        </Space>
      }
    >
      <Tree
        checkable
        selectable={false}
        onCheck={onCheck}
        showLine
        treeData={PermissionTreeData}
        checkedKeys={PermissionKeys}
        expandedKeys={PermissionExpendKeys}
        onExpand={(expandedKeys) => setPermissionExpendKeys(expandedKeys)}
        titleRender={(node: any) => {
          return (
            <Space>
              <div>{node.permissionName}</div>
              <Tag color={statusMap[node.type].color}>{statusMap[node.type].text}</Tag>
            </Space>
          );
        }}
        fieldNames={{
          key: 'permissionId',
        }}
      />
    </ProCard>
  );
}
