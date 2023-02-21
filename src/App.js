import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
