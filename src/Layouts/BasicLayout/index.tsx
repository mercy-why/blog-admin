import { createElement, useEffect } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'ice';
import store from '@/store';
import RightContent from './rightContent';
import iconsMap from './icons';

interface menuItem {
  permissionName: string;
  icon?: string;
  children?: menuItem[];
  url: string;
  type: 'F' | 'B' | 'M' | 'C';
}
const loopMenuItem = (menuList: menuItem[]) =>
  menuList?.map(({ permissionName, children, url, icon, type }) => {
    return {
      path: url,
      key: url,
      hideInMenu: type === 'F' || type === 'B',
      name: permissionName,
      icon: icon && iconsMap[icon] && createElement(iconsMap[icon]),
      children: children && loopMenuItem(children),
    };
  });

export default function BasicLayout({ children, history }) {
  const [userState, userDispatchers] = store.useModel('user');
  const { userInfo } = userState as any;
  useEffect(() => {
    userDispatchers.getUserInfo();
  }, [userDispatchers]);

  return (
    <ProLayout
      title="后台管理系统"
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: history.location.pathname,
      }}
      menuDataRender={() => loopMenuItem(userInfo?.userPermission)}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      rightContentRender={() => <RightContent />}
    >
      <div style={{ minHeight: '60vh', height: '100%' }}>{children}</div>
    </ProLayout>
  );
}
