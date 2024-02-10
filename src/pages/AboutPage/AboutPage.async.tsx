import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const AboutPageAsyncComponent = lazy(() => import('./AboutPage.tsx'));

const AboutPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <AboutPageAsyncComponent />
  </Suspense>
);

export default AboutPageAsync;
