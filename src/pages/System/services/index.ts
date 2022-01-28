import { request } from 'ice';
import React from 'react';

// 模块
export const getSysModuleList = (params: { moduleName?: string }) => {
  return request({
    url: '/sys/getSysModuleList',
    method: 'get',
    params,
  });
};

export const addOrUpdateSysModule = (data: { moduleName: string; status: string; id?: React.Key }) => {
  return request({
    url: '/sys/addOrUpdateSysModule',
    method: 'post',
    data,
  });
};

export const deleteSysModule = (params: { id: number }) => {
  return request({
    url: '/sys/deleteSysModule',
    method: 'delete',
    params,
  });
};

// URL
export const getSysResourceList = (params: { moduleId: React.Key }) => {
  return request({
    url: '/sys/getSysResourceList',
    method: 'get',
    params,
  });
};

export const addSysResource = (data: {
  resourceName: string;
  resourceUrl: string;
  status: string;
  moduleId: React.Key;
}) => {
  return request({
    url: '/sys/addSysResource',
    method: 'post',
    data: { sysResourceList: [data] },
  });
};

export const updateSysResource = (data: {
  resourceName: string;
  resourceUrl: string;
  status: string;
  id: React.Key;
  moduleId: React.Key;
}) => {
  return request({
    url: '/sys/updateSysResource',
    method: 'put',
    data,
  });
};

// 角色
export const getSysRoleList = (params?: { id: string }) => {
  return request({
    url: '/role/getRoleList',
    method: 'get',
    params,
  });
};

// 新增或修改角色
export const addOrUpdateSysRole = (data: { roleKey: string; roleName: string; id?: number; status?: string }) => {
  return request({
    url: '/sys/addOrUpdateSysRole',
    method: 'post',
    data,
  });
};

export const deleteSysRole = (params: { id: number }) => {
  return request({
    url: '/sys/deleteSysRole',
    method: 'delete',
    params,
  });
};

export const getMenuTree = () => {
  return request({
    url: '/permission/getPermissionTree',
    method: 'get',
  });
};

export const updateMenu = (data: { name: string; url: string; icon: string; id: React.Key }) => {
  return request({
    url: '/sys/updateMenu',
    method: 'put',
    data,
  });
};

export const addPermission = (data: {
  permissionName: string;
  url: string;
  icon: string;
  parentId: React.Key;
  type: string;
}) => {
  return request({
    url: '/permission/addPermission',
    method: 'post',
    data,
  });
};

export const deleteMenus = (params: { ids: string }) => {
  return request({
    url: '/sys/deleteMenus',
    method: 'delete',
    params,
  });
};

export const deleteSysResource = (params: { moduleId: React.Key; resourceId: React.Key }) => {
  return request({
    url: '/sys/deleteSysResource',
    method: 'delete',
    params,
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

export const addAccount = (data: {
  account: string;
  password: string;
  userName?: string;
  nickName?: string;
  status: string;
  sex?: string;
  email?: string;
  phonenumber?: string;
  roles: Array<{ id: number }>;
}) => {
  return request({
    url: '/addAccount',
    method: 'post',
    data,
  });
};

export const updateUser = (data: {
  id: React.Key;
  account: string;
  userName?: string;
  nickName?: string;
  status: string;
  sex?: string;
  email?: string;
  phonenumber?: string;
  roles: Array<{ id: number }>;
}) => {
  return request({
    url: '/sys/updateUser',
    method: 'put',
    data,
  });
};

export const deleteUser = (params: { userId: React.Key }) => {
  return request({
    url: '/sys/deleteUser',
    method: 'delete',
    params,
  });
};

export const resetPwd = (params: { userId: React.Key }) => {
  return request({
    url: '/sys/resetPwd',
    method: 'get',
    params,
  });
};
