import React, { lazy, Suspense } from 'react';

const LazyBoard = lazy(() => import('./Board'));

const Board = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBoard {...props} />
  </Suspense>
);

export default Board;
