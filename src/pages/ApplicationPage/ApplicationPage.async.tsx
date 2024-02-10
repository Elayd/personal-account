import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const ApplicationPageAsyncComponent = lazy(() => import('./ApplicationPage.tsx'));

const ApplicationPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <ApplicationPageAsyncComponent />
  </Suspense>
);

export default ApplicationPageAsync;
