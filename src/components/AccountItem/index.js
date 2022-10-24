import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_300x300.webp?x-expires=1666800000&x-signature=U0rnYGL1qiH7a4dLnXKBnchhpBA%3D"
        alt="user"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>datvilla94</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>🔥Đạt Villa🔥</p>
      </div>
    </div>
  );
}

export default AccountItem;
