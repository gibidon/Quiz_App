import { ReactNode } from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '@/shared/const/router';

interface RequireAuthProps {
  children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
  //   const auth = useSelector;
  const location = useLocation();

  //   if (!auth) {
  return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
  //   }

  return children;
}
