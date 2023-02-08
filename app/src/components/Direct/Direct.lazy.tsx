import React, { lazy, Suspense } from 'react';

const LazyDirect = lazy(() => import('./Direct'));

const Direct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDirect {...props} />
  </Suspense>
);

export default Direct;
