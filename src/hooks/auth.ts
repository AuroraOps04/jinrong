import { MessageInstance } from 'antd/es/message/interface';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import service from '../api';

const useAuth = (message: MessageInstance) => {
  const naviator = useNavigate();

  const [userInfo, setUserInfo] = useState<any>();
  useEffect(() => {
    if (!Cookies.get('token')) {
      message.error('请先登录');
      setTimeout(() => {
        naviator('/login');
      }, 800);
      return;
    }

    service.get('/api/getInfo').then((res) => {
      if (res.data.code === 200) {
        setUserInfo(res.data.user);
      } else {
        message.error(res.data.message);
      }
    });
  }, []);
  return [userInfo];
};
export default useAuth;
