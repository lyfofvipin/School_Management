import React from 'react';
import './App.css';

function Admission() {
  return (
    <div className="App" className="admission">
      <img src={require('./images/admission.gif')} />
      <div>
        <p className="batch">
          Batch starting from 20 March <br />
          Limites Seat<br />
          4 Days Class in a Week<br />
        </p>
      </div>
    </div>
  );
}

export default Admission;
