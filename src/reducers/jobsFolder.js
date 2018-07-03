import { SET_JOBS_FOLDER } from '../constants/actionTypes';

const jobsFolder = (state = '', action) => {
  switch (action.type) {
    case SET_JOBS_FOLDER:
      return action.jobsFolder;
    default:
      return state;
  }
};

export default jobsFolder;
