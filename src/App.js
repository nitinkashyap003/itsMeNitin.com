import React from 'react';
import './App.css';
import {hot, setConfig} from 'react-hot-loader';
// import MainHeader from './MainHeader/MainHeader.js';
import LeftSection from './components/BasicStructure/LeftSection/LeftSection.js';
import RightSection from './components/BasicStructure/RightSection/RightSection.js';
setConfig({logLevel : 'debug'});
function App() {
  return (
    <div className="App">
      {/* <MainHeader /> */}
      <LeftSection />
      <RightSection />
    </div>  
  );
}
export default hot(module)(App);

