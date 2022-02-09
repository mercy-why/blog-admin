import store from '@/store';
import { useEffect } from 'react';

export default function Home({ history }) {
  const [userState] = store.useModel('user');
  const { userPermission } = (userState?.userInfo as any) || {};
  useEffect(() => {
    if (userPermission) {
      history.replace(userPermission[0].url);
    }
  }, [userPermission, history]);

  return <div>home</div>;
}
