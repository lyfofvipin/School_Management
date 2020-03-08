import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './navigation';
import Admission from './admission';
import Class from './class';
import Competitive from './competitive';
import Home from './home'
import Contect from './contect';
import Download from './downloads';
import Program from './programs';
import Why from './why_us';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="App">
          <Route path="/" exext component={Home} />
          <Route path="/admission" component={Admission} />
          <Route path="/class" component={Class} />
          <Route path="/competitive" component={Competitive} />
          <Route path="/contect" component={Contect} />
          <Route path="/downloads" component={Download} />
          <Route path="/programs" component={Program} />
          <Route path="/why_us" component={Why} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
