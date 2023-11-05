import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'
import Admins from './pages/admins/Admins'
import Namangan from './components/namangandan/Namangan';
import Toshkent from './components/toshkentdan/Toshkent';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admins' element={<Admins />} />
        <Route path='/namangandan' element={<Namangan />} />
        <Route path='/toshkentdan' element={<Toshkent />} />
      </Routes>
    </div>
  );
}

export default App;
