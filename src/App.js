import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Navbar from './Components/Navbar';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                {/* <LoginSignup /> */}

                <Routes>
                    <Route path="/" element={<LoginSignup />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;