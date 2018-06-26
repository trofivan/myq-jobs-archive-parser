import * as types from '../constants/actionTypes';

export const changeJobsFolder = jobsFolder => ({
  type: types.CHANGE_JOBS_FOLDER,
  jobsFolder
});
