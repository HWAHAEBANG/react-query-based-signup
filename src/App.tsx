import styles from './App.module.scss';
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'contexts/SessionProvider';
import useViewportError from 'hooks/useViewportError';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000
      },
    },
  })

    useViewportError()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Header/>
        <div className={styles.outletWrapper}>
          <Outlet/>
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default App;
