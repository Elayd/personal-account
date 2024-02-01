import { Route, Routes } from 'react-router-dom';
import AuthPageAsync from '../pages/AuthPage/AuthPageAsync.tsx';
import PrivateRoute from './PrivateRouter.tsx';
import Layout from '../Widgets/Layout/Layout.tsx';
import StatusesPageAsync from '../pages/StatusesPage/StatusesPage.async.tsx';
import ProfilePageAsync from '../pages/ProfilePage/ProfilePage.async.tsx';

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
            <div>Applications</div>
          </Layout>
        </PrivateRoute>
      }
    />
    <Route path="*" element={<div>NotFound</div>} />
  </Routes>
);

export default AppRoutes;
