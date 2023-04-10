import '../styles/App.css';
import Home from './Home';
import {
  Routes,
  Route,
  BrowserRouter 
} from "react-router-dom";
import 'dayjs/locale/ro';
import dayjs from 'dayjs';
import Login from '../components/login/Login';
import Signup from '../components/register/Register';

function App() {
  dayjs.locale('ro');
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/UI" element={<Home />} />
          <Route path="/UI/login" element={<Login />} />
          <Route path="/UI/signup" element={<Signup />} />
          <Route path="/UI/*" element={<div>page not found</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;