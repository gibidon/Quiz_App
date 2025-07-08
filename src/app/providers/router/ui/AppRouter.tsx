import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../config/RequireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

export function AppRouter() {
  function renderWithWrapper(route: AppRoutesProps) {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
