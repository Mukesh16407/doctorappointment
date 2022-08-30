
import { Toaster } from 'react-hot-toast';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
function App() {
  return (
    <div>
      <Toaster
      position='top-centre'
      reverseOrder={false}
      />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/'element={<Home/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
