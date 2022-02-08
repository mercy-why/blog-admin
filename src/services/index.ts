import { request } from 'ice';

export const loginUserInfo = () => {
  return request({
    url: '/loginUserInfo',
    method: 'get',
  });
};

export const loginUserMenus = () => {
  return request({
    url: '/loginUserMenus',
    method: 'get',
  });
};


export const switchRole = (params: { roleId: string }) => {
  return request({
    url: '/switchRole',
    method: 'get',
    params,
    withFullResponse: true,
  });
};

export const loginOut = () => {
  return request({
    url: '/logout',
    method: 'get',
  });
};

export const updatePwd = (data: { oldPwd: string; newPwd: string }) => {
  return request({
    url: '/sys/updatePwd',
    method: 'put',
    data,
  });
};
