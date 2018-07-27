import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styleFlexContainer = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
};

const styleFlexItem = {
  width: '100%'
};

const styleHeader = {
  boxShadow: '0 0 8px rgba(0,0,0,0.3)',
  zIndex: 10
};

const styleContent = {
  flexGrow: 1,
  overflow: 'auto',
  zIndex: 5
};

const styleFooter = {
  boxShadow: '0 0 8px rgba(0,0,0,0.3)',
  zIndex: 10
};

const App = () => (
  <div style={styleFlexContainer}>
    <div style={{ ...styleFlexItem, ...styleHeader }}>
      <Header />
    </div>
    <div style={{ ...styleFlexItem, ...styleContent }}>
      <Content />
    </div>
    <div style={{ ...styleFlexItem, ...styleFooter }}>
      <Footer />
    </div>
  </div>
);

export default App;
