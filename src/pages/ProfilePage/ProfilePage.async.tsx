import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const ProfilePageAsyncComponent = lazy(() => import('./ProfilePage.tsx'));

const ProfilePageAsync = () => (
  <Suspense fallback={<Loader />}>
    <ProfilePageAsyncComponent />
  </Suspense>
);

export default ProfilePageAsync;
