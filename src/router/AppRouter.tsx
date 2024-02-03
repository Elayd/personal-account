import { Route, Routes } from 'react-router-dom';
import AuthPageAsync from '../pages/AuthPage/AuthPageAsync.tsx';
import PrivateRoute from './PrivateRouter.tsx';
import Layout from '../Widgets/Layout/Layout.tsx';
import StatusesPageAsync from '../pages/StatusesPage/StatusesPage.async.tsx';
import ProfilePageAsync from '../pages/ProfilePage/ProfilePage.async.tsx';
import NotFoundPageAsync from '../pages/NotFoundPage/NotFoundPage.async.tsx';
import ApplicationsPageAsync from '../pages/ApplicationsPage/ApplicationsPage.async.tsx';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <div>Start Page</div>
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
      path="/statuses"
      element={
        <PrivateRoute>
          <Layout>
            <StatusesPageAsync />
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
    <Route path="*" element={<NotFoundPageAsync />} />
  </Routes>
);

export default AppRoutes;
