import { Navigate } from 'react-router';
import { ReactElement } from 'react';
import useUserStore from '../pages/AuthPage/store/user.ts';

interface IPrivateRouteProps {
  children: ReactElement;
}
const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { isLoggedIn } = useUserStore();
  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default PrivateRoute;
