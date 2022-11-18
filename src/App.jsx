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
      <main className='main-content-wrapper'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/timer' element={<TimerPage />}></Route>
          </Routes>
        </Router>
      </main>
      <div className='sideNav'>
        <div className='navItem'>
          
        </div>
        <div>
          <div className='navItem'>
            
          </div>
          <div className='navItem'>
            
            </div>
            <div className='navItem'>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;