import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroHeader from './components/hero_header/HeroHeader';


const App = () => {
  return (
    <div className="mainPage">
        <Header />
        <HeroHeader />
    </div>
  );
}

export default App;
