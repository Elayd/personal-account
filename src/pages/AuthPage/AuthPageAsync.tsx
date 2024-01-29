import { lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader.tsx';

const AuthFormAsyncComponent = lazy(() => import('./AuthForm.tsx'));

const AuthPageAsync = () => (
  <Suspense fallback={<Loader />}>
    <AuthFormAsyncComponent />
  </Suspense>
);

export default AuthPageAsync;
