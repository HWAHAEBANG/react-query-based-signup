import './App.scss';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      헤더 영역
      <Outlet/>
    </div>
  );
}

export default App;
