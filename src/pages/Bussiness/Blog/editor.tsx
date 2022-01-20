import { Editor } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';
import mdiumZoom from '@bytemd/plugin-medium-zoom';
import { useState, useEffect } from 'react';
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
import { Input, Button, message } from 'antd';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/monokai-sublime.css';
import { saveOrUpdate, getById, upload } from './services';
import { useParams, config } from 'ice';

const EditorComponent = ({ history }) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const plugins = [gfm(), highlight(), mdiumZoom()];
  const { id } = useParams<{ id: string }>();
  const submitFn = async (type: '1' | '2') => {
    const data = {
      title,
      content: value,
      status: type,
    };
    if (id) {
      Object.assign(data, { id });
    }
    await saveOrUpdate(data);
    message.success('保存成功');
    history.push('/blog/article');
  };
  const uploadImg = async (files) => {
    const file = files[0];
    const params = new FormData();
    params.append('file', file, file.name);
    const res = await upload(params);
    return [{ url: `${config.fileUrl}${res.url}`, title: res.originalFilename }];
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
        <Button onClick={() => history.push('/blog/article')}>返回文章列表</Button>
        <Button className="submit-btn" onClick={() => submitFn('2')} type="primary" ghost>
          保存为草稿
        </Button>
        <Button className="submit-btn" type="primary" onClick={() => submitFn('1')}>
          发布
        </Button>
      </div>
      <Editor
        locale={zhHans}
        value={value}
        plugins={plugins}
        uploadImages={uploadImg}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </div>
  );
};
export default EditorComponent;
