import { Editor } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';
import mdiumZoom from '@bytemd/plugin-medium-zoom';
import { useState, useEffect } from 'react';
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
import { Input, Button, message } from 'antd';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/monokai-sublime.css';
import { saveOrUpdate, getById } from './services';
import { useParams } from 'ice';

const EditorComponent = ({ history }) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const plugins = [gfm(), highlight(), mdiumZoom()];
  const { id } = useParams<{ id: string }>();
  const submitFn = async () => {
    const data = {
      title,
      content: value,
      description: '',
      status: '1',
    };
    if (id) {
      Object.assign(data, { id });
    }
    await saveOrUpdate(data);
    message.success('保存成功');
    history.goBack();
  };
  useEffect(() => {
    if (id) {
      getById({ id }).then((res) => {
        setValue(res.content);
        setTitle(res.title);
      });
    }
  }, [id]);
  return (
    <div className="ar-x">
      <div className="ar-header">
        <Input
          placeholder="输入文章标题"
          maxLength={80}
          className="edit-title"
          bordered={false}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={() => history.goBack()}>
          返回文章列表
        </Button>
        <Button className="submit-btn" type="primary" onClick={submitFn}>
          发布
        </Button>
      </div>
      <Editor
        locale={zhHans}
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </div>
  );
};
export default EditorComponent;
