import { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, message, Popconfirm } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getRoleList, addRole, updateRole, deleteRole } from '../services';
import { useRequest, Link } from 'ice';

interface tableItem {
  roleId: string;
  enabled: number;
  roleName: string;
  roleKey: string;
  isCreate?: boolean;
  modified: number;
}

export default () => {
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const createFn = () => {
    actionRef.current?.addEditRecord({
      roleId: (Math.random() * 1000000).toFixed(0),
      roleKey: '',
      roleName: '',
      enabled: '1',
      isCreate: true,
    });
  };

  const { request: deleteRequest } = useRequest(deleteRole, {
    onSuccess: () => {
      message.success('删除成功');
      actionRef.current?.reload(true);
    },
  });

  const columns: Array<ProColumns<tableItem>> = [
    {
      title: '权限标识',
      dataIndex: 'roleKey',
      formItemProps: () => {
        return {
          rules: [
            { required: true, message: '此项为必填项' },
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: '权限标识只能是英文或数字字符',
            },
          ],
        };
      },
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '角色状态',
      dataIndex: 'enabled',
      search: false,
      renderText: t => String(t),
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
      render: (text, record, _, action) => {
        return record.modified === 1
          ? [
            <a
              key="editable"
              onClick={() => {
                action?.startEditable?.(record.roleId);
              }}
            >
              编辑
            </a>,
            <Popconfirm
              key="del"
              title="是否删除此角色?"
              onConfirm={() => deleteRequest({ roleId: record.roleId })}
              okText="是"
              cancelText="否"
            >
              <a>删除</a>
            </Popconfirm>,
            <Link key="disturb" to={`/system/role/${record.roleId}`}>
              分配权限
            </Link>,
          ]
          : '';
      },
    },
  ];
  return (
    <ProTable<tableItem>
      columns={columns}
      actionRef={actionRef}
      request={async () => {
        const data = await getRoleList();
        return {
          data,
          success: true,
        };
      }}
      rowKey="roleId"
      search={false}
      dateFormatter="string"
      options={false}
      headerTitle="角色管理"
      editable={{
        form,
        onSave: async (key, data) => {
          const { roleKey, roleName, isCreate, roleId, enabled } = data;
          const params = {
            roleKey,
            roleName,
            enabled,
          };
          let msg = '';
          if (!isCreate) {
            Object.assign(params, { roleId });
            await updateRole(params);
            msg = '编辑';
          } else {
            await addRole(params);
            msg = '编辑';
          }
          message.success(`${msg}成功`);
          actionRef.current?.reload(true);
        },
        actionRender: (row, config, defaultDoms) => {
          return [defaultDoms.save, defaultDoms.cancel];
        },
      }}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={createFn}>
          新增角色
        </Button>,
      ]}
    />
  );
};
