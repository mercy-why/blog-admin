import { Dropdown, Avatar, Menu, Space, Modal, message } from 'antd';
import { useState } from 'react';
import type { MenuInfo } from 'rc-menu/lib/interface';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  DownCircleOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { useHistory, useRequest } from 'ice';
import { CheckCard } from '@ant-design/pro-card';
import { switchRole, loginOut, updatePwd } from '@/services';
import { ModalForm, ProFormText, ProFormDependency } from '@ant-design/pro-form';
import store from '@/store';

function RightContent() {
  const [userState, userDispatchers] = store.useModel('user');
  const { userInfo } = userState;
  const { nickName, userName, currentRole, roles } = (userInfo as any) || {};
  const [showModal, setVisible] = useState(false);
  const [showPM, setShowPM] = useState(false);
  const [curRole, setcurRole] = useState('');
  const history = useHistory();
  const loginOutFn = async () => {
    const { pathname } = history.location;
    await loginOut();
    if (window.location.pathname !== '/login') {
      history.replace({
        pathname: '/login',
        search: JSON.stringify({
          redirect: pathname,
        }),
      });
    }
    localStorage.clear();
  };
  const onMenuClick = (event: MenuInfo) => {
    const { key } = event;
    switch (key) {
      case 'logout':
        loginOutFn();
        break;
      case 'changeRole':
        setVisible(true);
        break;
      case 'settings':
        setShowPM(true);
        break;
      default:
        break;
    }
  };
  const { loading: confirmLoading, request } = useRequest(switchRole, {
    onSuccess: (res) => {
      const { authorization } = res.headers;
      localStorage.setItem('authorization', authorization);
      setVisible(false);
      userDispatchers.getUserInfo();
    },
  });
  const handOk = () => {
    if (!curRole || curRole === currentRole?.id) {
      closeModal();
    } else {
      request({
        roleId: curRole,
      });
    }
  };
  const closeModal = () => {
    setTimeout(() => setVisible(false));
  };
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="settings">
        <SettingOutlined />
        <span className="ml10">????????????</span>
      </Menu.Item>
      {roles?.length > 1 ? (
        <Menu.Item key="changeRole">
          <UserSwitchOutlined />
          <span className="ml10">????????????</span>
          <Modal
            title="????????????"
            visible={showModal}
            destroyOnClose
            onCancel={closeModal}
            onOk={handOk}
            confirmLoading={confirmLoading}
          >
            <CheckCard.Group
              size="small"
              onChange={(value: string) => {
                setcurRole(value);
              }}
              defaultValue={currentRole.id}
            >
              {roles.map((item: { id: number; roleName: string; remark: string }) => (
                <CheckCard key={item.id} title={item.roleName} description={item.remark} value={item.id} />
              ))}
            </CheckCard.Group>
          </Modal>
        </Menu.Item>
      ) : (
        ''
      )}
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        <span className="ml10">????????????</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menuHeaderDropdown}>
        <Space className="hand">
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
          <span>{nickName || userName}</span>
          <span>{currentRole ? currentRole.roleName : ''}</span>
          <DownCircleOutlined />
        </Space>
      </Dropdown>
      <ModalForm<{
        oldPwd: string;
        newPwd: string;
        comfirmPW: string;
      }>
        title="????????????"
        autoFocusFirstInput
        visible={showPM}
        width={400}
        modalProps={{
          destroyOnClose: true,
          maskClosable: false,
          onCancel: () => setShowPM(false),
        }}
        onFinish={async (values) => {
          const { newPwd, oldPwd } = values;
          await updatePwd({ newPwd, oldPwd });
          message.success('????????????');
          loginOutFn();
        }}
      >
        <ProFormText.Password
          rules={[
            {
              required: true,
              message: '?????????????????????',
            },
          ]}
          name="oldPwd"
          label="?????????"
        />
        <ProFormText.Password
          name="newPwd"
          label="?????????"
          rules={[
            {
              required: true,
              message: '?????????????????????',
            },
            {
              pattern: /^(\w){6,20}$/,
              message: '?????????????????????',
            },
          ]}
        />
        <ProFormDependency name={['newPwd']}>
          {({ newPwd }) => (
            <ProFormText.Password
              name="comfirmPW"
              label="???????????????"
              rules={[
                {
                  required: true,
                  message: '?????????????????????',
                },
                {
                  validator: (_, value) => {
                    if (value !== newPwd) {
                      return Promise.reject(new Error('??????????????????????????????'));
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            />
          )}
        </ProFormDependency>
      </ModalForm>
    </>
  );
}

export default RightContent;
