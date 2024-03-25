import styles from './App.module.scss';
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header/>
      <div className={styles.outletWrapper}>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
