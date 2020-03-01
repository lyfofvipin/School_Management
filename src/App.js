import React from 'react';
import profileImage from './img/test_img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My School Management system app.</h1>
      <h2>Author: Vipin</h2>
      <img src={profileImage} alt="profile image" />
    </div>
  );
}

export default App;
