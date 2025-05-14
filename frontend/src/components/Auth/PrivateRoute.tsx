import { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { UserDataContext } from '../../context/user.context';

const PrivateRoute: React.FC = () => {
  const { userCredentials } = useContext(UserDataContext);

  const token = userCredentials.token;
  if (!token) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
};

export default PrivateRoute;
