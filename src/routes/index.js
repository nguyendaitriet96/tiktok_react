import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import routes from '~/configs/routes';

export const publicRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.profile, component: Profile },
    { path: routes.following, component: FollowingPage },
    { path: routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: routes.search, component: SearchPage, layout: null },
];

// Require log-in
export const privateRoutes = [];
