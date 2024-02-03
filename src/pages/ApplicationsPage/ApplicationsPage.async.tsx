import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const ApplicationsPageAsyncComponent = lazy(() => import('./ApplicationsPage.tsx'));

const ApplicationsPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <ApplicationsPageAsyncComponent />
  </Suspense>
);

export default ApplicationsPageAsync;
