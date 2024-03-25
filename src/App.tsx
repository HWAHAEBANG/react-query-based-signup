import styles from './App.module.scss';
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <div className={styles.outletWrapper}>
        <Outlet/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
