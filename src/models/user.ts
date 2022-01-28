// src/models/user.ts
import { loginUserInfo, loginUserMenus } from '@/services';
import { IRootState, IRootDispatch } from '@/store';
import { history } from 'ice';

interface role {
  id: number;
  roleName: string;
  remark: string;
}
interface userType {
  nickName: string;
  userName: string;
  menuList?: Array<{}>;
  userId: number;
  currentRole: role;
  roles: role[];
}
export default {
  // 定义 model 的初始 state
  state: {
    userInfo: null,
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState: IRootState, payload: { userInfo: userType }) {
      return {
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch: IRootDispatch) => ({
    async getUserInfo() {
      const authorization = localStorage.getItem('authorization');
      if (!authorization) {
        history?.replace({
          pathname: '/login',
          search: `redirect=${history?.location.pathname}`,
        });
        return;
      }
      const [userInfo, userPermission] = await Promise.all([loginUserInfo(), loginUserMenus()]);
      const { userName, userId, account } = userInfo;
      dispatch.user.update({
        userInfo: {
          userName,
          userId,
          account,
          userPermission,
        },
      });
    },
  }),
};
