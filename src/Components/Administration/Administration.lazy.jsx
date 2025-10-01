import React, { lazy, Suspense } from 'react';

const LazyAdministration = lazy(() => import('./Administration'));

const Administration = props => (
  <Suspense fallback={null}>
    <LazyAdministration {...props} />
  </Suspense>
);

export default Administration;
