import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TimerPage from './Views/TimerPage/TimerPage';
import HomePage from './Views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FocusUp</h1>
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/timer' element={<TimerPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;