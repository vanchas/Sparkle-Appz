import React from 'react';
// import logo from '../../logo.svg';
import './App.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainContent from '../mainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
