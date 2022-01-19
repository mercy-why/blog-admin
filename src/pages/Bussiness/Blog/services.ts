import { request } from 'ice';
import { Key } from 'react';

export const getBlogList = (params: { currentPage?: Number; pageSize?: Number }) => {
  return request({
    url: '/blog/list',
    method: 'get',
    params,
  });
};

export const saveOrUpdate = (data: {
  id?: Key;
  title: string;
  description: string;
  content: string;
  status: String;
}) => {
  return request({
    url: '/blog/saveOrUpdate',
    method: 'post',
    data,
  });
};

export const getById = (params: { id: Key }) => {
  return request({
    url: '/blog/getById',
    method: 'get',
    params,
  });
};

export const removeByIds = (params: { ids: string }) => {
  return request({
    url: '/blog/removeByIds',
    method: 'delete',
    params,
  });
};
