import React from 'react';
import { connect } from 'react-redux';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import antdEn from 'antd/lib/locale-provider/en_US';
import antdRu from 'antd/lib/locale-provider/ru_RU';

import appEnMessages from '../locales/en';
import appRuMessages from '../locales/ru';

import App from './App';

const antdLocales = {
  en: antdEn,
  ru: antdRu
};

const appLocales = {
  en: {
    locale: 'en',
    messages: {
      ...appEnMessages
    }
  },
  ru: {
    locale: 'ru',
    messages: {
      ...appRuMessages
    }
  }
};

const mapStateToProps = ({ locale }) => ({
  antdLocale: antdLocales[locale],
  appLocale: appLocales[locale]
});

const IntlApp = ({ antdLocale, appLocale }) => (
  <LocaleProvider locale={antdLocale} key={antdLocale.locale}>
    <IntlProvider
      locale={appLocale.locale}
      messages={appLocale.messages}
      textComponent={React.Fragment}
    >
      <App />
    </IntlProvider>
  </LocaleProvider>
);

export default connect(mapStateToProps)(IntlApp);
