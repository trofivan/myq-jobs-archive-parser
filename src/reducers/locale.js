import { SET_LOCALE } from '../constants/actionTypes';

const jobsFolder = (state = 'en', action) => {
  switch (action.type) {
    case SET_LOCALE:
      return action.locale;
    default:
      return state;
  }
};

export default jobsFolder;
