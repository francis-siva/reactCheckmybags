import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroHeader from './components/hero_header/HeroHeader';
import Carroussel from './components/carroussel/Carroussel';

const App = () => {
  return (
    <div className="mainPage">
        <Header />
        <HeroHeader />
        <Carroussel />
    </div>
  );
}

export default App;
