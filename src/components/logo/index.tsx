import './index.less';

import * as React from 'react';

import logo from '../../assets/logo-2.png';
import name from '../../assets/name.png';
const Logo = () => {
  return (
    <div className="logo">
      <img className="logo" src={logo} alt="logo" />
      {/*<h1>大同市平城国有资产经营管理有限责任公司</h1>*/}
      <img src={name} alt="name" className="name" />
      {/*<h2>Datong Pingcheng State Owned Assets Management Co.Ltd.</h2>*/}
    </div>
  );
};
export default React.forwardRef(Logo);
