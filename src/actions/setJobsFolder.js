import { SET_JOBS_FOLDER } from '../constants/actionTypes';

export const setJobsFolder = jobsFolder => ({
  type: SET_JOBS_FOLDER,
  jobsFolder
});

export default setJobsFolder;
