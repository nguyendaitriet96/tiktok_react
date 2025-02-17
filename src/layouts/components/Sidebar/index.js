import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import configs from '~/configs';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={configs.routes.home} icon={<HomeIcon />}></MenuItem>
                <MenuItem title="Following" to={configs.routes.following} icon={<UserGroupIcon />}></MenuItem>
                <MenuItem title="LIVE" to={configs.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
