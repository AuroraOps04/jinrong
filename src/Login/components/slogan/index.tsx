import './index.less';

import * as React from 'react';

import f1 from '../../../assets/f1.png';
import f2 from '../../../assets/f2.png';
export const Slogan = () => {
  return (
    <div className="slogan">
      <img src={f1} alt="f1" className="p p1" />
      <img src={f2} alt="f2" className="p p2" />
    </div>
  );
};
