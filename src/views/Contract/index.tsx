import useMessage from 'antd/es/message/useMessage';
import React from 'react';

import { Pdf } from '../../components/pdf';
import useAuth from '../../hooks/auth';

function Contract() {
  const [message, messageHodler] = useMessage();
  const [userInfo] = useAuth(message);
  return (
    (userInfo && (
      <div>
        {messageHodler}
        <Pdf url={'http://124.221.101.202:8081' + userInfo.email} />
      </div>
    )) ||
    ''
  );
}

export default Contract;
