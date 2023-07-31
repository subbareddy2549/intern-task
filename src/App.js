// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import "./home.css";
import JobListingsPage from './JobListingsPage';
import JobDetailsPage from './JobDetailsPage';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='main-container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/JobListingsPage" element={<JobDetailsPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
