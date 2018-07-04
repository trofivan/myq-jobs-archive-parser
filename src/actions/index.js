import actionSetJobsFolder from './setJobsFolder';
import actionFetchJobs from './fetchJobs';

export const setJobsFolder = actionSetJobsFolder;
export const fetchJobs = actionFetchJobs;

// Jobs filter
import {
  JOBS_FILTER_SET_TYPE,
  JOBS_FILTER_SET_DATE_START,
  JOBS_FILTER_SET_DATE_END
} from '../constants/actionTypes';

export const setJobsType = jobsType => ({
  type: JOBS_FILTER_SET_TYPE,
  jobsType
});

export const setUsers = users => ({
  type: JOBS_FILTER_SET_USERS,
  users
});

export const setDateStart = dateStart => ({
  type: JOBS_FILTER_SET_DATE_START,
  dateStart
});

export const setDateEnd = dateEnd => ({
  type: JOBS_FILTER_SET_DATE_END,
  dateEnd
});
