import 'pdfh5/css/pdfh5.css';

import Cookies from 'js-cookie';
import Pdfh5 from 'pdfh5';
import { useEffect, useRef } from 'react';
export const Pdf = (props: { url: string }) => {
  const pdfh5 = useRef();
  useEffect(() => {
    pdfh5.current = new Pdfh5('#pdf', {
      pdfurl: props.url,
      httpHeaders: {
        Authorization: Cookies.get('token'),
      },
    });
    pdfh5.current?.on('complete', function (status, msg, time) {
      console.log('状态：' + status + '，信息：' + msg + '，耗时：' + time + '毫秒');
    });
  }, [props]);
  return <div id="pdf"></div>;
};
