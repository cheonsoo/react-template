import React, { Suspense } from 'react';
import Spinner from '@/components/atoms/Spinner';
import ErrorBoundary from '@/components/atoms/ErrorBoundary';
import CustomErrorPage from '@/components/organisms/CustomErrorPage';

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary fallback={<CustomErrorPage />}>
          <div className="App">REACT TEMPLATE</div>
        </ErrorBoundary>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
