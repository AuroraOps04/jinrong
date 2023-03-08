import './index.less';

import React from 'react';

import b1 from '../../../../assets/b1.png';
import b2 from '../../../../assets/b2.png';
type BtnsProps = {
  n1: () => void;
  n2: () => void;
};
export const Btns = (props: BtnsProps) => {
  return (
    <div className="btns">
      <img src={b1} onClick={props.n1} alt="我的合同" className="btn"></img>
      <img src={b2} onClick={props.n2} alt="我的欠款" className="btn"></img>
    </div>
  );
};
