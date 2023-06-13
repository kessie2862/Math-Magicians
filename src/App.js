import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';
import RandomQuotes from './components/RandomQuotes';
import Home from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-content">
          <h2 className="nav-heading">Math Magicians</h2>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="border">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<RandomQuotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
