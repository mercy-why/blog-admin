import { useRef, useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { getUserListPage, updateUser, addUser, deleteUser, getRoleList, resetPassword } from '../services';
import { message, Popconfirm, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface tableItem {
  userId: string;
  enabled: string;
  userName: string;
  account: string;
  isCreate?: boolean;
  roles?: Array<{
    roleId: React.Key;
    roleKey: string;
    roleName: string;
  }>;
  roleList: string[];
}

export default () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const columns: Array<ProColumns<tableItem>> = [
    {
      title: '用户名称',
      dataIndex: 'userName',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '账号',
      dataIndex: 'account',
      formItemProps: () => {
        return {
          rules: [
            { required: true, message: '此项为必填项' },
            { pattern: /^[a-zA-Z0-9_-]{3,16}$/, message: '用户名格式不正确' },
          ],
        };
      },
    },
    {
      title: '角色',
      dataIndex: 'roleList',
      valueType: 'select',
      search: false,
      request: async () => {
        const userData = await getRoleList();
        return userData.map((x: { roleId: string; roleName: string }) => ({
          value: x.roleId,
          label: x.roleName,
        }));
      },
      fieldProps: {
        mode: 'multiple',
      },
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      renderText: (t, record) => record.roles?.map((x) => x.roleId),
      render: (t, record) => record.roles?.map((x) => x.roleName).join(),
    },
    {
      title: '用户状态',
      dataIndex: 'enabled',
      search: false,
      valueType: 'select',
      renderText: (t) => String(t),
      valueEnum: {
        0: {
          text: '停用',
          status: 'Error',
        },
        1: {
          text: '正常',
          status: 'Success',
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      dataIndex: 'option',
      width: 250,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.userId);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="reset"
          title="是否重置此用户密码?"
          onConfirm={async () => {
            await resetPassword({ userId: record.userId });
            message.success('密码已重置');
          }}
          okText="是"
          cancelText="否"
        >
          <a onClick={async () => {}}>重置密码</a>
        </Popconfirm>,
        <Popconfirm
          key="delete"
          title="是否删除此用户?"
          onConfirm={async () => {
            await deleteUser({ userId: record.userId });
            message.success('删除成功');
            action?.reset && action?.reset();
          }}
          okText="是"
          cancelText="否"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];
  const createFn = () => {
    actionRef.current?.addEditRecord(
      {
        userId: Date.now(),
        userName: '',
        enabled: '1',
        isCreate: true,
        roles: [],
      },
      {
        position: 'top',
      },
    );
  };
  return (
    <EditableProTable<tableItem>
      columns={columns}
      actionRef={actionRef}
      recordCreatorProps={false}
      request={async (params) => {
        const { current: currentPage, pageSize, userName, account } = params;
        const { records, total } = await getUserListPage({
          currentPage,
          pageSize,
          userName,
          account,
        });
        return {
          data: records,
          success: true,
          total,
        };
      }}
      editable={{
        editableKeys,
        onSave: async (key, record) => {
          const { userName, enabled, isCreate, userId, account, roleList } = record;
          const msg = isCreate ? '新增' : '编辑';
          const roleIdsStr = roleList.join();
          const unencryptPwd = `${account}123`;
          if (isCreate) {
            await addUser({ userName, enabled, account, unencryptPwd, roleIdsStr });
            actionRef.current?.reset && actionRef.current?.reset();
          } else {
            await updateUser({ userId, userName, enabled, account, roleIdsStr });
            actionRef.current?.reload();
          }
          message.success(`${msg}成功`);
        },
        onChange: setEditableRowKeys,
        actionRender: (row, config, dom) => [dom.save, dom.cancel],
      }}
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
      rowKey={(r) => r.userId}
      options={false}
      headerTitle="用户管理"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={createFn}>
          新增用户
        </Button>,
      ]}
    />
  );
};
