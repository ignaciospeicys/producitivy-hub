import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Pomodoro from './components/Pomodoro';
import Matrix from './components/Matrix';
import Stats from './components/Stats';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <aside className="App-sidebar">
          <nav>
            <ul>
              <li><Link to="/pomodoro">Pomodoro</Link></li>
              <li><Link to="/matrix">Matrix</Link></li>
              <li><Link to="/stats">Stats</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="App-content">
          <Routes>
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/matrix" element={<Matrix />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/" element={<h1>Hello World</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;