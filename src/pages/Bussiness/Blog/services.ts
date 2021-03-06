import { request } from 'ice';
import { Key } from 'react';

export const getBlogList = (params: {
  currentPage?: Number;
  pageSize?: Number;
  title?: string;
  status?: string;
  beginTime?: string;
  endTime?: string;
}) => {
  return request({
    url: '/blog/list',
    method: 'get',
    params,
  });
};

export const saveOrUpdate = (data: {
  id?: Key;
  title?: string;
  description?: string;
  content?: string;
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

export const upload = (data: any) => {
  return request({
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: '/blog/upload',
    method: 'post',
    data,
  });
};
