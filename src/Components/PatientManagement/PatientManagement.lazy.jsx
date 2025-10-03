import React, { lazy, Suspense } from 'react';

const LazyAdministration = lazy(() => import('./PatientManagement'));

const PatientManagement = props => (
  <Suspense fallback={null}>
    <LazyAdministration {...props} />
  </Suspense>
);

export default PatientManagement;
