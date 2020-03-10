import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <title>TPWA</title>
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
      <p className="why_us">Contact Information: <a href="https://www.facebook.com/thepathwayacademydelhi/">The Path Way Academy</a></p>
    </footer>
    </div>
  );
}

export default Home;
