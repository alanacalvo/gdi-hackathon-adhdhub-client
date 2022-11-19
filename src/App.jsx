import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TimerPage from './Views/TimerPage/TimerPage';
import HomePage from './Views/HomePage/HomePage';
import LandingPage from './Views/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<LandingPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/timer' element={<TimerPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;