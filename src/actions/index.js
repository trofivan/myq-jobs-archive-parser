// Set jobs folder
import actionSetJobsFolder from './setJobsFolder';
export const setJobsFolder = actionSetJobsFolder;

// Fetch jobs
import {
  fetchJobsRequest as actionFetchJobsRequest,
  fetchJobsSuccess as actionFetchJobsSuccess,
  fetchJobsCancel as actionJobsCancel,
  fetchJobsError as actionJobsError
} from './fetchJobs';
export const fetchJobsRequest = actionFetchJobsRequest;
export const fetchJobsSuccess = actionFetchJobsSuccess;
export const fetchJobsCancel = actionJobsCancel;
export const fetchJobsError = actionJobsError;

// Filters
import {
  setJobsType as actionSetJobsType,
  setUsers as actionSetUsers,
  setDateRange as actionSetDateRange
} from './jobsFilter';
export const setJobsType = actionSetJobsType;
export const setUsers = actionSetUsers;
export const setDateRange = actionSetDateRange;
