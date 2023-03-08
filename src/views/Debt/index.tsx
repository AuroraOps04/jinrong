import './index.less';

import useMessage from 'antd/es/message/useMessage';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import d1 from '../../assets/d1.png';
import d2 from '../../assets/d2.png';
import Logo from '../../components/logo';
import useAuth from '../../hooks/auth';

TweenOne.plugins.push(Children);
function Debt() {
  const [message, messageHolder] = useMessage();
  const [userInfo] = useAuth(message);
  return (
    (userInfo && (
      <div className="debt-box">
        {messageHolder}
        <Logo />
        <div className="d-box">
          <img src={d1} alt="d1" className="d d1" />
          <img src={d2} alt="d2" className="d d2" />
        </div>
        <QueueAnim duration={1000} className="box">
          <div key="01" className="item">
            欠款金额:￥
            <TweenOne
              style={{ display: 'inline-block', fontSize: '.31rem', fontWeight: 'bold' }}
              animation={{
                duration: 1000,
                Children: {
                  value: parseInt(userInfo.money),
                  floatLength: 2,
                  // formatMoney: true,
                },
              }}
            >
              0
            </TweenOne>
          </div>
          <div key="02" className="item">{`到期日期: ${userInfo?.amountTime}`}</div>
        </QueueAnim>
      </div>
    )) ||
    ''
  );
}

export default Debt;
