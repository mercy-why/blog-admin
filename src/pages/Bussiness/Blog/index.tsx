import { useRef, useState } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { getBlogList, removeByIds, saveOrUpdate } from './services';
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
      ellipsis: true,
      render: (text, record) => <Link to={`/editor/${record.id}`}>{text}</Link>,
    },
    {
      title: '文章描述',
      dataIndex: 'description',
      ellipsis: true,
      search: false,
    },
    {
      title: '文章状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '下线',
          status: 'Default',
        },
        1: {
          text: '上线',
          status: 'Processing',
        },
        2: {
          text: '草稿',
          status: 'Success',
        },
      },
      width: 120,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'date',
      width: 120,
      search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'date',
      width: 120,
      search: false,
    },
    {
      title: '更新时间区间',
      dataIndex: 'timeRange',
      valueType: 'dateRange',
      hideInTable: true,
    },
    {
      title: '操作',
      valueType: 'option',
      dataIndex: 'option',
      width: 140,
      render: (t, record, _, action) => {
        const typeMap = {
          0: {
            text: '上线',
            status: '1',
          },
          1: {
            text: '下线',
            status: '0',
          },
          2: {
            text: '发布',
            status: '1',
          },
        };
        const { status, text } = typeMap[record.status];
        return [
          <a
            key="editable"
            onClick={() => {
              history.push(`/editor/${record.id}`);
            }}
          >
            编辑
          </a>,
          <Popconfirm
            key="stop"
            title={`是否${text}此文章?`}
            onConfirm={async () => {
              await saveOrUpdate({ id: record.id, status });
              message.success(`${text}成功`);
              action?.reset && action?.reset();
            }}
            okText="是"
            cancelText="否"
          >
            <a>{text}</a>
          </Popconfirm>,
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
        ];
      },
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
        const { current: currentPage, pageSize, title, status, timeRange } = params;
        const [beginTime, endTime] = timeRange || [];
        const { records, total } = await getBlogList({
          currentPage,
          pageSize,
          title,
          status,
          beginTime,
          endTime,
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
