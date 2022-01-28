import React, { useRef, useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { getMenuTree, updateMenu, addPermission, deleteMenus } from '../services';
import { message, Popconfirm, Tag, Button } from 'antd';
import { useRequest } from 'ice';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

interface DataSourceType {
  permissionId: React.Key;
  url: string;
  permissionName: string;
  icon: string;
  parentId: React.Key;
  children?: DataSourceType[];
  isCreate?: boolean;
  type: string;
}
export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const [editLine, setEditLine] = useState<{ permissionName: string; url: string; icon: string }>({
    permissionName: '',
    url: '',
    icon: '',
  });
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance<any>>();
  const loopMenuId = (list: DataSourceType[], arr: React.Key[] = []) => {
    list &&
      list.forEach((item) => {
        arr.push(item.permissionId);
        if (item.children) {
          loopMenuId(item.children, arr);
        }
      });
    return arr;
  };
  const createItem = () => {
    return {
      parentId: 0,
      permissionName: '',
      url: '',
      icon: '',
      isCreate: true,
      type: 'C',
      permissionId: Date.now(),
      sort: 0,
    };
  };
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
  const columns: Array<ProColumns<DataSourceType>> = [
    {
      title: '菜单名称',
      dataIndex: 'permissionName',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: 'URL',
      dataIndex: 'url',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '图标',
      dataIndex: 'icon',
    },
    {
      title: '类型',
      dataIndex: 'type',
      editable: false,
      render: (t, record) => <Tag color={statusMap[record.type].color}>{statusMap[record.type].text}</Tag>,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record: DataSourceType, _, action) => [
        <a
          key="create"
          onClick={() => {
            action?.addEditRecord(
              {
                ...createItem(),
                parentId: record.permissionId,
              },
              {
                parentKey: record.permissionId,
                newRecordType: 'dataSource',
              },
            );
            setExpandedRowKeys([...editableKeys, record.permissionId]);
          }}
        >
          新增子菜单
        </a>,
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.permissionId);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="是否删除此菜单?"
          onConfirm={async () => {
            const list = record.children ? loopMenuId(record.children) : [];
            list.push(record.permissionId);
            await deleteMenus({ ids: list.join() });
            action?.reload(true);
            message.success('删除成功');
          }}
          okText="是"
          cancelText="否"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  const { request: updateReq } = useRequest(updateMenu);
  const { request: createReq } = useRequest(addPermission);
  const createFn = () => {};
  return (
    <ProForm<{
      table: DataSourceType[];
    }>
      formRef={formRef}
      submitter={false}
      className="form-x"
    >
      <EditableProTable<DataSourceType>
        rowKey={(r) => r.permissionId}
        headerTitle="权限管理"
        actionRef={actionRef}
        name="table"
        expandable={{
          expandedRowKeys,
          onExpand: (expanded, record) => {
            if (expanded) {
              setExpandedRowKeys([...expandedRowKeys, record.permissionId]);
            } else {
              setExpandedRowKeys(expandedRowKeys.filter((x) => x !== record.permissionId));
            }
          },
        }}
        request={async () => {
          const data = await getMenuTree();
          return {
            data,
            success: true,
          };
        }}
        columns={columns}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={createFn}>
            新增目录
          </Button>,
        ]}
        recordCreatorProps={false}
        editable={{
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.save, defaultDoms.cancel];
          },
          onSave: async (key, data) => {
            const { icon, permissionName, url } = editLine;
            const { isCreate, permissionId, parentId, type } = data;
            if (isCreate) {
              await createReq({ icon, permissionName, url, parentId, type });
            } else {
              await updateReq({ icon, permissionId, permissionName, url });
            }
            const msg = isCreate ? '新增' : '编辑';
            message.success(`${msg}成功`);
            actionRef.current?.reload(true);
          },
          onCancel: () => {
            actionRef.current?.reload();
            return Promise.resolve();
          },
          onChange: setEditableRowKeys,
          onValuesChange: (record) => {
            setEditLine(record);
          },
        }}
      />
    </ProForm>
  );
};
