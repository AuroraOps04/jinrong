import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

const useAuth = () => {
  useEffect(() => {
    if (Cookies.get('token')) {
      alert('please login');
      redirect('/login');
    }
  }, []);
};
export default useAuth;
