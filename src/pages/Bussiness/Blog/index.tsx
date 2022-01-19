import { useRef, useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getBlogList, removeByIds } from './services';
import { message, Popconfirm, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'ice';

interface tableItem {
  id: number;
  status: string;
  title: string;
  description: string;
}

export default ({ history }) => {
  const actionRef = useRef<ActionType>();
  const columns: Array<ProColumns<tableItem>> = [
    {
      title: '文章标题',
      dataIndex: 'title',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
      ellipsis: true,
      render: (text, record) => <Link to={`/editor/${record.id}`}>{text}</Link>,
    },
    {
      title: '文章描述',
      dataIndex: 'description',
      ellipsis: true,
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
      title: '文章状态',
      dataIndex: 'status',
      search: false,
      valueEnum: {
        0: {
          text: '无效',
          status: 'Default',
        },
        1: {
          text: '有效',
          status: 'Success',
        },
        2: {
          text: '草稿',
          status: 'Processing',
        },
      },
      width: 120,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      search: false,
      valueType: 'date',
      width: 120,
    },
    {
      title: '操作',
      valueType: 'option',
      dataIndex: 'option',
      width: 120,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            history.push(`/editor/${record.id}`);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="是否删除此文章?"
          onConfirm={async () => {
            await removeByIds({ ids: record.id.toString() });
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
    history.push('/editor');
  };
  return (
    <ProTable<tableItem>
      columns={columns}
      actionRef={actionRef}
      request={async (params) => {
        const { current: currentPage, pageSize } = params;
        const { records, total } = await getBlogList({
          currentPage,
          pageSize,
        });
        return {
          data: records,
          success: true,
          total,
        };
      }}
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 10,
        hideOnSinglePage: true,
      }}
      rowKey="id"
      options={false}
      headerTitle="博客管理"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={createFn}>
          写文章
        </Button>,
      ]}
    />
  );
};
