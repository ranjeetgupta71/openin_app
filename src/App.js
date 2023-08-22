import './App.css';
import DashBoard from './components/DashBoard';
import LoginSignUp from './components/LoginSignUp.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp/>} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
