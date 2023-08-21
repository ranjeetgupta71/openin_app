import './App.css';
import DashBoard from './components/DashBoard';
import LoginSignUp from './components/LoginSignUp.js';
import {Router, Route, Routes, browserHistory} from 'react-router-dom';


function App() {
  return (
    // <LoginSignUp/>
    // <DashBoard/>
    <Router>
      <Routes>
        <Route exact path="/" component={LoginSignUp} />
        <Route path="/dashboard" component={DashBoard} />
      </Routes>
    </Router>
  );
}

export default App;
