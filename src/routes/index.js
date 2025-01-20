import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/layouts/HeaderOnly';
import configs from '~/configs';

export const publicRoutes = [
    { path: configs.routes.home, component: HomePage },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.following, component: FollowingPage },
    { path: configs.routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: configs.routes.search, component: SearchPage, layout: null },
];

// Require log-in
export const privateRoutes = [];
