import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const NotFoundAsyncComponent = lazy(() => import('./NotFoundPage.tsx'));

const NotFoundPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <NotFoundAsyncComponent />
  </Suspense>
);

export default NotFoundPageAsync;
