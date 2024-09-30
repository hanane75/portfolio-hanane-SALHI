import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectsComponent from './components/ProjectsComponent';
import Skills from './components/Skills';

import Contact from './components/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsComponent />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
export default App;  // Assurez-vous d'exporter par défaut
ReactDOM.render(<App />, document.getElementById('root'));
