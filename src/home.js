import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <table className="menu_list">
        <td className="box"><Link to='/programs'>Programs</Link></td>
        <td className="box"><Link to='/competitive'>Competitive Exam</Link></td>
        <td className="box"><Link to='/class'>Class Schedule</Link></td>
      </table>
      <table className="menu_list">
        <td className="box"><Link to='/downloads'>Downloads</Link></td>
        <td className="box"><Link to='/admission'>Admission</Link></td>
        <td className="box"><Link to='/contect'>Contect US</Link></td>
      </table>
      <table className="menu_list">
        <td className="box"><Link to='/why_us'>Why US?</Link></td>
      </table>
      <footer>
        <p>Contact information: <a href="http://twitter.com/vipin3699">Vipin Kumar</a>.</p>
    </footer>
    </div>
  );
}

export default Home;
