import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <ul className="nav-links">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/programs'>
            <li>Programs</li>
          </Link>
          <Link to='/competitive'>
            <li>Competitive Exam</li>
          </Link>
          <Link to='/class'>
            <li>Class Schedule</li>
          </Link>
          <Link to='/downloads'>
            <li>Downloads</li>
          </Link>
          <Link to='/admission'>
            <li>Admission</li>
          </Link>
          <Link to='/contect'>
            <li>Contect US</li>
          </Link>
          <Link to='/why_us'>
            <li>Why US?</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Navigation;
