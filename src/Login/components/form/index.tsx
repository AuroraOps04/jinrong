import './index.less';

import useMessage from 'antd/es/message/useMessage';
import axios from 'axios';
import Cookie from 'js-cookie';
import React, { useState } from 'react';

import service from '../../../api';
function Form() {
  const [message, contextHolder] = useMessage();
  const [name, setName] = useState('123456');
  const [s, setS] = useState('商铺位置');
  const [p, setP] = useState('承租方');
  const onSubmit = async (e: MouseEvent) => {
    e.stopPropagation();
    message.info(name);
    message.info(s);
    message.info(p);
    const res = await service.post('/api/loginPhone', {
      username: name,
      phonenumber: p,
      remark: s,
    });
    Cookie.set('token', res.data.token);
    const data = await service.get('/api/getInfo');
    console.log(data.data);
  };
  return (
    <form className="login-form">
      {contextHolder}
      <div className="item">
        <input
          type="text"
          value={name}
          onChange={(val) => setName(val.target.value)}
          placeholder="签约时使用的姓名(公司名)"
        />
        <span>承租方:</span>
      </div>
      <div className="item">
        <input
          value={s}
          type="text"
          onChange={(val) => setS(val.target.value)}
          placeholder="签约商铺"
        />
        <span>商铺位置:</span>
      </div>
      <div className="item">
        <input
          value={p}
          type="text"
          placeholder="签约预留"
          onChange={(val) => setP(val.target.value)}
        />
        <span>身份证号/手机号:</span>
      </div>
      <button type="button" onClick={onSubmit} className="item">
        登录
      </button>
    </form>
  );
}

export default Form;
