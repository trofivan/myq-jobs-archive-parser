import { SET_LOCALE } from '../constants/actionTypes';
import getAppLocale from '../libs/getAppLocale';

const jobsFolder = (state = getAppLocale(), action) => {
  switch (action.type) {
    case SET_LOCALE:
      return action.locale;
    default:
      return state;
  }
};

export default jobsFolder;
