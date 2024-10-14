import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

import HeaderOnly from '~/components/Layout/HeaderOnly';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/search', component: SearchPage, layout: null },
];

// Require log-in
export const privateRoutes = [];
