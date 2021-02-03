import './App.css';
import React from 'react';

import Phrase from './components/Phrase';
import ContainerButtons from './components/ContainersButtons'

//window.onload = alert("jajajajaja");

function App() {
  return (
    <div id="mainContainer">
      <div id="containerForm">
        <Phrase/>
        <ContainerButtons/>
      </div>
    </div>
  );
}

export default App;
