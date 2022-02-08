import { request } from 'ice';
import React from 'react';

// 角色
export const getRoleList = (params?: { id: string }) => {
  return request({
    url: '/role/getRoleList',
    method: 'get',
    params,
  });
};

// 新增角色
export const addRole = (data: { roleKey: string; roleName: string; status?: string }) => {
  return request({
    url: '/role/addRole',
    method: 'post',
    data,
  });
};
// 修改角色
export const updateRole = (data: { roleKey: string; roleName: string; status?: string; roleId?: React.Key }) => {
  return request({
    url: '/role/updateRole',
    method: 'put',
    data,
  });
};
// 删除角色
export const deleteRole = (params: { roleId: string }) => {
  return request({
    url: '/role/deleteRole',
    method: 'delete',
    params,
  });
};

export const getPermissionTree = () => {
  return request({
    url: '/permission/getPermissionTree',
    method: 'get',
  });
};

export const updatePermission = (data: {
  permissionName: string;
  url: string;
  icon: string;
  type: string;
  sort: number;
  parentId?: string;
  permissionId: string;
}) => {
  return request({
    url: '/permission/updatePermission',
    method: 'put',
    data,
  });
};

export const addPermission = (data: {
  permissionName: string;
  url: string;
  icon: string;
  type: string;
  sort: number;
  parentId?: string;
}) => {
  return request({
    url: '/permission/addPermission',
    method: 'post',
    data,
  });
};

export const deletePermission = (params: { permissionId: string }) => {
  return request({
    url: '/permission/deletePermission',
    method: 'delete',
    params,
  });
};

export const distributeRoles = (data: { userId: string; roleIds: string }) => {
  return request({
    url: '/user/distributeRoles',
    method: 'post',
    data,
  });
};

export const getPermissionTreeByRoleId = (params: { roleId: string }) => {
  return request({
    url: '/role/getPermissionTreeByRoleId',
    method: 'get',
    params,
  });
};

export const distributePermissions = (data: { roleId: string; permissionIds: string }) => {
  return request({
    url: '/role/distributePermissions',
    method: 'post',
    data,
  });
};

export const distributeMenus = (data: {
  roleMenuList: Array<{ roleId: React.Key; menuId: React.Key }>;
  roleId: React.Key;
}) => {
  return request({
    url: '/sys/distributeMenus',
    method: 'post',
    data,
  });
};

export const distributeInterfaces = (data: {
  roleResourceList: Array<{ roleId: React.Key; resourceId: React.Key }>;
  roleId: React.Key;
}) => {
  return request({
    url: '/sys/distributeInterfaces',
    method: 'post',
    data,
  });
};

export const getUserListPage = (params: {
  currentPage?: number;
  pageSize?: number;
  userName?: string;
  account?: string;
}) => {
  return request({
    url: '/user/getUserListPage',
    method: 'get',
    params,
  });
};

export const addUser = (data: {
  account: string;
  unencryptPwd: string;
  userName: string;
  enabled: string;
  roleIdsStr: string;
}) => {
  return request({
    url: '/user/addUser',
    method: 'post',
    data,
  });
};

export const updateUser = (data: {
  userId: React.Key;
  account: string;
  userName: string;
  enabled: string;
  roleIdsStr: string;
}) => {
  return request({
    url: '/user/updateUser',
    method: 'put',
    data,
  });
};

export const deleteUser = (params: { userId: React.Key }) => {
  return request({
    url: '/user/deleteUser',
    method: 'delete',
    params,
  });
};

export const resetPassword = (params: { userId: React.Key }) => {
  return request({
    url: '/user/resetPassword',
    method: 'put',
    params,
  });
};
