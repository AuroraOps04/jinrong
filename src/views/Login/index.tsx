import './index.less';

import * as React from 'react';

import Form from './components/form';
import Logo from './components/logo';
import { Slogan } from './components/slogan';

export const Login = () => {
  return (
    <div className={'login-box'}>
      <Logo key="logo" />
      <Slogan />
      <Form />
    </div>
  );
};
