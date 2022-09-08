import { Toaster } from 'react-hot-toast';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { useSelector } from "react-redux";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {PublicRoute} from "./components/PublicRoute";
import { ApplyDoctor } from './pages/ApplyDoctor';
import { Notification } from './pages/Notification';
import { UserList } from './pages/Admin/UserList';
import { DoctorList } from './pages/Admin/DoctorList';
import { Profile } from './pages/Doctor/Profile';
import { BookAppointment } from './pages/BookAppointment';
import { Appointment } from './pages/Appointment';
import { DoctorAppointment } from './pages/Doctor/DoctorAppointment';

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
        <Route path='/apply-doctor'element={ <ProtectedRoute> <ApplyDoctor /> </ProtectedRoute> }/>
        <Route path='/notifications'element={ <ProtectedRoute> <Notification /> </ProtectedRoute> }/>
        <Route path='/admin/userslist'element={ <ProtectedRoute> <UserList /> </ProtectedRoute> }/>
        <Route path='/admin/doctorslist'element={ <ProtectedRoute> <DoctorList /> </ProtectedRoute> }/>
        <Route path='/doctor/profile/:userId'element={ <ProtectedRoute> <Profile /> </ProtectedRoute> }/>
        <Route path="/book-appointment/:doctorId"element={ <ProtectedRoute><BookAppointment /> </ProtectedRoute>}/>
        <Route path="/appointments"element={<ProtectedRoute> <Appointment /> </ProtectedRoute> } />
        <Route path="/doctor/appointments"element={<ProtectedRoute><DoctorAppointment /></ProtectedRoute>}/>
      
      </Routes>
    
    </div>
  );
}

export default App;
