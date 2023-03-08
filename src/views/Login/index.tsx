import './index.less';

import * as React from 'react';

import Logo from '../../components/logo';
import { Slogan } from '../../components/slogan';
import Form from './components/form';

export const Login = () => {
  return (
    <div className={'login-box'}>
      <Logo key="logo" />
      <Slogan />
      <Form />
    </div>
  );
};
