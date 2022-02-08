import { runApp, IAppConfig, config as iceConfig, history } from 'ice';
import { message } from 'antd';
import { codeMessage } from '@/utils';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'hash',
  },
  request: [
    {
      baseURL: iceConfig.baseURL,
      // 拦截器
      interceptors: {
        request: {
          onConfig: (config) => {
            const authorization = localStorage.getItem('authorization');
            // 发送请求前：可以对 RequestConfig 做一些统一处理
            if (history?.location.pathname !== '/login') {
              if (authorization) {
                Object.assign(config.headers, { authorization });
              } else {
                history?.push('/login');
              }
            }
            return config;
          },
          onError: (error) => {
            return Promise.reject(error);
          },
        },
        response: {
          onConfig: (response) => {
            const code = response?.data.code;
            // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
            if (code === 401) {
              history?.replace({
                pathname: '/login',
                search: `redirect=${history?.location.pathname}`,
              });
            }
            if (code !== 200) {
              message.error(response.data.msg || '请求错误');
              return Promise.reject(response);
            }
            return response?.data;
          },
          onError: (error) => {
            const { status } = error?.response || {};
            const msg = status ? codeMessage[status] : '请求错误';
            message.destroy();
            message.error(msg || '请求错误');
            return Promise.reject(error);
          },
        },
      },
    },
    {
      instanceName: 'loginRequest',
      baseURL: iceConfig.baseURL,
      interceptors: {
        request: {
          onError: (error) => {
            return Promise.reject(error);
          },
        },
        response: {
          onConfig: (response) => {
            // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
            if (response?.data.code !== 200) {
              message.error(response.data.msg || '请求错误');
            }
            return response;
          },
          onError: (error) => {
            const { status } = error?.response || {};
            const msg = status ? codeMessage[status] : '请求错误';
            message.destroy();
            message.error(msg);
            if (status === 401) {
              history?.replace({
                pathname: '/login',
                search: `redirect=${history?.location.pathname}`,
              });
            }
            return Promise.reject(error);
          },
        },
      },
    },
  ],
};

runApp(appConfig);
