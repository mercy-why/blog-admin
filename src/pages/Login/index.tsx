import styles from './index.module.less';
import { Form, Input, Button, Checkbox, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRequest, useHistory, getSearchParams } from 'ice';
import { loginReq, captchaImage } from './services';

interface loginParams {
  account: string;
  password: string;
  rememberMe: boolean;
  verifyCode: string;
}

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const { data: codeData, refresh } = useRequest(captchaImage, {
    manual: false,
  });
  const { uuid, data: img } = codeData || {};
  const loginFn = (values: loginParams) => loginReq({ ...values, uuid });
  const { loading, request } = useRequest(loginFn, {
    onSuccess: (res) => {
      if (res.data.code === 200) {
        const { authorization } = res.headers;
        localStorage.setItem('authorization', authorization);
        const { redirect } = getSearchParams();
        if (redirect && redirect !== '/login') {
          history.push(redirect as string);
        } else {
          history.push('/');
        }
      } else {
        refresh();
      }
    },
  });

  const checkVCode = async (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('请输入验证码'));
    } else if (!/^[A-Za-z0-9]{3,5}$/.test(value)) {
      return Promise.reject(new Error('请输入正确的验证码'));
    } else {
      return Promise.resolve();
    }
  };
  return (
    <div className={styles['login-x']}>
      <div className={styles['login-content']}>
        <div className={styles['login-form']}>
          <div className={styles['title']}>后台管理系统</div>
          <Form
            form={form}
            className={styles['form-box']}
            onFinish={request}
            validateTrigger="onBlur"
            initialValues={{ rememberMe: false }}
          >
            {/* <div className={styles['sub-title']}>账号密码登录</div> */}
            <Form.Item name="account" rules={[{ required: true, message: '请输入账号' }]}>
              <Input autoComplete="username" prefix={<UserOutlined />} placeholder="请输入账号" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input
                prefix={<LockOutlined />}
                type="password"
                autoComplete="current-password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Space className="code-x">
                <Form.Item name="verifyCode" noStyle rules={[{ validator: checkVCode }]}>
                  <Input placeholder="请输入验证码" />
                </Form.Item>
                <img className={styles['verify-x']} onClick={refresh} src={img} />
              </Space>
            </Form.Item>
            <Form.Item name="rememberMe" valuePropName="checked">
              <Checkbox>记住我一周</Checkbox>
            </Form.Item>
            <Button type="primary" loading={loading} block htmlType="submit" className={styles['sub-x']}>
              {!loading ? '登录' : '登录中...'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
