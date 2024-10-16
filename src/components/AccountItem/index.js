import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/43e492a83711b4894f3f871c536a46d8.jpeg?lk3s=a5d48078&nonce=93954&refresh_token=1705dcee6800c2cbc9dd073332b83623&x-expires=1729220400&x-signature=EGLonL9XnnHItTNNKp1Tm2TQ0%2Fc%3D&shp=a5d48078&shcp=b59d6b55"
                alt="avatar"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>My name</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>username</span>
            </div>
        </div>
    );
}

export default AccountItem;
