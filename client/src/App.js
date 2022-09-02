
import { Toaster } from 'react-hot-toast';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { useSelector } from "react-redux";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {PublicRoute} from "./components/PublicRoute";
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
  
    <div>
       {loading &&(
      <div className="spinner-parent">
      <div className="spinner-border" role="status"></div>
    </div>
    )}
      <Toaster
      position='top-centre'
      reverseOrder={false}
      />
      <Routes>
        <Route path="/login" element={ <PublicRoute><Login /></PublicRoute>}/>
        <Route path="/register" element={ <PublicRoute><Register /> </PublicRoute>}/>
        <Route path='/'element={ <ProtectedRoute> <Home /> </ProtectedRoute> }/>
      </Routes>
    
    </div>
  );
}

export default App;
