import styles from './App.module.scss';
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'contexts/SessionProvider';
import useViewportError from 'hooks/useViewportError';
import QueryErrorBoundary from 'routes/QueryErrorBoundary';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
      },
    },
  })


  return (
    <QueryClientProvider client={queryClient}>
       <QueryErrorBoundary>
        <SessionProvider>
        <Header/>
        <div className={styles.outletWrapper}>
          <Outlet/>
        </div>
      </SessionProvider>
      </QueryErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
