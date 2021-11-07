import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Stars from './components/Stars';

class App extends React.Component {
  render() {
    return (
      <>
        <Stars />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
