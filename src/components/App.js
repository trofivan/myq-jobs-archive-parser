import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

const App = () => (
  <div className="app">
    <div className="app__header">
      <Header />
    </div>
    <div className="app__content">
      <Content />
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

export default App;
