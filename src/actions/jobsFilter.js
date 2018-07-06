import {
  JOBS_FILTER_SET_TYPE,
  JOBS_FILTER_SET_USERS,
  JOBS_FILTER_SET_DATE_RANGE
} from '../constants/actionTypes';

export const setJobsType = jobsType => ({
  type: JOBS_FILTER_SET_TYPE,
  jobsType
});

export const setUsers = users => ({
  type: JOBS_FILTER_SET_USERS,
  users
});

export const setDateRange = dateRange => ({
  type: JOBS_FILTER_SET_DATE_RANGE,
  dateRange
});
