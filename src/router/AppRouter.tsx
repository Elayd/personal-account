import { Route, Routes } from 'react-router-dom';
import AuthPageAsync from '../pages/AuthPage/AuthPageAsync.tsx';
import PrivateRoute from './PrivateRouter.tsx';
import Layout from '../Widgets/Layout/Layout.tsx';
import ProfilePageAsync from '../pages/ProfilePage/ProfilePage.async.tsx';
import NotFoundPageAsync from '../pages/NotFoundPage/NotFoundPage.async.tsx';
import ApplicationsPageAsync from '../pages/ApplicationsPage/ApplicationsPage.async.tsx';
import ApplicationPageAsync from '../pages/ApplicationPage/ApplicationPage.async.tsx';
import AboutPageAsync from '../pages/AboutPage/AboutPage.async.tsx';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <AboutPageAsync />
        </Layout>
      }
    />
    <Route path="/auth" element={<AuthPageAsync />} />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Layout>
            <ProfilePageAsync />
          </Layout>
        </PrivateRoute>
      }
    />
    <Route
      path="/applications"
      element={
        <PrivateRoute>
          <Layout>
            <ApplicationsPageAsync />
          </Layout>
        </PrivateRoute>
      }
    />
    <Route
      path="/applications/:id"
      element={
        <PrivateRoute>
          <Layout>
            <ApplicationPageAsync />
          </Layout>
        </PrivateRoute>
      }
    />
    <Route path="*" element={<NotFoundPageAsync />} />
  </Routes>
);

export default AppRoutes;
