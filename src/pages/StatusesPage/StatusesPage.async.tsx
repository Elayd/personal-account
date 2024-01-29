import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const StatusesPageAsyncComponent = lazy(() => import('./StatusesPage.tsx'));

const StatusesPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <StatusesPageAsyncComponent />
  </Suspense>
);

export default StatusesPageAsync;
