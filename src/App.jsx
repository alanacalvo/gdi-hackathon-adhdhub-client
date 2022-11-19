import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TimerPage from './Views/TimerPage/TimerPage';
import HomePage from './Views/HomePage/HomePage';
import SideNav from './Components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/timer' element={<TimerPage />}></Route>
        </Routes>
      </Router>
      <SideNav />
    </div>
  );
}

export default App;