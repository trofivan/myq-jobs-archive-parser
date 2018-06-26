import * as types from '../constants/actionTypes';

const jobsFolder = (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_JOBS_FOLDER:
      return action.jobsFolder;
    default:
      return state;
  }
};

export default jobsFolder;
