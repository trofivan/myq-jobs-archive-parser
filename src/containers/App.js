import { connect } from 'react-redux';
import App from '../components/App';

import antdEn from 'antd/lib/locale-provider/en_US';
import antdRu from 'antd/lib/locale-provider/ru_RU';

import appEnMessages from '../locales/en';
import appRuMessages from '../locales/ru';

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

export default connect(mapStateToProps)(App);
