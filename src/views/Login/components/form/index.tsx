import './index.less';

import useMessage from 'antd/es/message/useMessage';
import Cookie from 'js-cookie';
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import service from '../../../../api/index';
function Form() {
  const [message, contextHolder] = useMessage();
  const [name, setName] = useState('');
  const [s, setS] = useState('');
  const [p, setP] = useState('');
  const navigator = useNavigate();
  const onSubmit = async (e: Event) => {
    e.stopPropagation();
    const res = await service.post('/api/loginPhone', {
      username: name,
      phonenumber: p,
      remark: s,
    });

    if (res.data.success) {
      Cookie.set('token', res.data.token);
      message.success('登录成功');
      setTimeout(() => {
        navigator('/');
      }, 300);
    } else {
      message.error(res.data.message);
    }
  };
  return (
    <form className="login-form">
      {contextHolder}
      <QueueAnim type="left" duration={1000}>
        <div key="1" className="item">
          <input
            type="text"
            value={p}
            onChange={(val) => setP(val.target.value)}
            placeholder="签约时使用的姓名(公司名)"
          />
          <span>承租方:</span>
        </div>
        <div key="2" className="item">
          <input
            value={s}
            type="text"
            onChange={(val) => setS(val.target.value)}
            placeholder="签约商铺"
          />
          <span>商铺位置:</span>
        </div>
        <div key="3" className="item">
          <input
            value={name}
            type="text"
            placeholder="签约预留"
            onChange={(val) => setName(val.target.value)}
          />
          <span>身份证号/手机号:</span>
        </div>
        <button key="4" type="button" onClick={(e) => onSubmit(e)} className="item">
          登录
        </button>
      </QueueAnim>
    </form>
  );
}

export default Form;
