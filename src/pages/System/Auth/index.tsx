import { useRef, useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getPermissionTree, updatePermission, addPermission, deletePermission } from '../services';
import { message, Popconfirm, Tag, Button } from 'antd';
import { useRequest } from 'ice';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

interface DataSourceType {
  permissionId: string;
  url: string;
  permissionName: string;
  icon: string;
  parentId?: string;
  children?: DataSourceType[];
  isCreate?: boolean;
  type: string;
  sort: number;
}
export default () => {
  const actionRef = useRef<ActionType>();
  const [modalVisit, setModalVisit] = useState(false);
  const createItem = () => {
    return {
      permissionName: '',
      url: '/',
      icon: '',
      isCreate: true,
      type: '',
      permissionId: String(Date.now()),
      sort: 0,
    };
  };
  const [initialValues, setInitialValues] = useState<DataSourceType>(createItem());
  const formRef = useRef<ProFormInstance>();
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
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
  const statusOptions = Object.entries(statusMap).map((x) => ({ value: x[0], label: x[1].text }));
  const columns: Array<ProColumns<DataSourceType>> = [
    {
      title: '权限名称',
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
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record: DataSourceType, _, action) => [
        <a
          key="create"
          onClick={() => {
            setModalVisit(true);
            setInitialValues({
              ...createItem(),
              parentId: record.permissionId,
            });
          }}
        >
          新增子权限
        </a>,
        <a
          key="editable"
          onClick={() => {
            setModalVisit(true);
            setInitialValues({
              ...record,
              isCreate: false,
            });
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="是否删除此权限?"
          onConfirm={async () => {
            await deletePermission({ permissionId: record.permissionId });
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

  const { request: updateReq } = useRequest(updatePermission);
  const { request: createReq } = useRequest(addPermission);
  const createFn = () => {
    setModalVisit(true);
    setInitialValues({
      ...createItem(),
      type: 'C',
    });
  };
  const closeModal = () => {
    setModalVisit(false);
    setInitialValues({
      ...createItem(),
    });
  };
  return (
    <div className="table-x">
      <ProTable<DataSourceType>
        rowKey={(r) => r.permissionId}
        headerTitle="权限管理"
        actionRef={actionRef}
        name="table"
        options={false}
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
          const data = await getPermissionTree();
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
        search={false}
        pagination={false}
      />
      <ModalForm<DataSourceType>
        title={`${initialValues.isCreate ? '新增' : '编辑'}权限`}
        autoFocusFirstInput
        visible={modalVisit}
        initialValues={initialValues}
        formRef={formRef}
        modalProps={{
          destroyOnClose: true,
          width: 500,
          onCancel: () => closeModal(),
        }}
        onFinish={async (values) => {
          const { parentId, permissionId } = initialValues;
          if (initialValues.isCreate) {
            await createReq({ ...values, parentId });
          } else {
            await updateReq({ ...values, parentId, permissionId });
          }
          message.success('提交成功');
          closeModal();
          actionRef.current?.reload();
        }}
      >
        <ProFormText name="permissionName" label="权限名称" placeholder="请输入权限名称" />
        <ProFormText name="url" label="URL" placeholder="请输入URL" />
        <ProFormText name="icon" label="图标" placeholder="请输入图标名称" />
        <ProFormText name="sort" label="排序" placeholder="请输入排序" />
        <ProFormSelect name="type" label="类型" options={statusOptions} disabled={initialValues.type === 'C'} />
      </ModalForm>
    </div>
  );
};
