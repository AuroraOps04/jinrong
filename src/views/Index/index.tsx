import './index.less';

import useMessage from 'antd/es/message/useMessage';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components/logo';
import { Slogan } from '../../components/slogan';
import useAuth from '../../hooks/auth';
import { Btns } from './components/btns';
export const Index = () => {
  const [message, messageHolder] = useMessage();
  const naviator = useNavigate();
  useAuth(message);
  return (
    <div className="index-box">
      {messageHolder}
      <Logo />
      <Slogan />
      <Btns n1={() => naviator('/contract')} n2={() => naviator('/debt')} />
    </div>
  );
};
