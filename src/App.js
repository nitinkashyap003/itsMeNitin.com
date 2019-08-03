import React from 'react';
import './App.css';
import {hot, setConfig} from 'react-hot-loader';
import Website from './components/index.js';
// import MainHeader from './MainHeader/MainHeader.js';
setConfig({logLevel : 'debug'});
function App() {
  return (
    <div className="App">
      <div className="Website-build"><Website /></div>
    </div>  
  );
}
export default hot(module)(App);

