import React from 'react';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

const App = ({ antdLocale, appLocale }) => (
  <LocaleProvider locale={antdLocale} key={antdLocale.locale}>
    <IntlProvider
      locale={appLocale.locale}
      messages={appLocale.messages}
      textComponent={React.Fragment}
    >
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
    </IntlProvider>
  </LocaleProvider>
);

export default App;
