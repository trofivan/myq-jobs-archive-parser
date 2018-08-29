import { join as pathJoin } from 'path';
import { readdirSync } from 'fs';

const localesDir = pathJoin('src', 'locales');
const defaultLocale = 'en';

const getUserLocale = () => navigator.language.split('-')[0];

const getAppLocale = () => {
  try {
    const availableLocales = readdirSync(localesDir).map(
      item => item.split('.json')[0]
    );
    const userLocale = getUserLocale();

    return availableLocales.includes(userLocale) ? userLocale : defaultLocale;
  } catch (e) {
    return defaultLocale;
  }
};

export default getAppLocale;
