import actionSetJobsFolder from './setJobsFolder';

import actionSetLocale from './setLocale';

import {
  fetchJobsRequest as actionFetchJobsRequest,
  fetchJobsSuccess as actionFetchJobsSuccess,
  fetchJobsCancel as actionJobsCancel,
  fetchJobsError as actionJobsError
} from './fetchJobs';

import {
  setJobsType as actionSetJobsType,
  setUsers as actionSetUsers,
  setDateRange as actionSetDateRange
} from './jobsFilter';

import actionFetchLatestVersion from './fetchLatestVersion';

// Set jobs folder
export const setJobsFolder = actionSetJobsFolder;

// Set locale
export const setLocale = actionSetLocale;

// Fetch jobs
export const fetchJobsRequest = actionFetchJobsRequest;
export const fetchJobsSuccess = actionFetchJobsSuccess;
export const fetchJobsCancel = actionJobsCancel;
export const fetchJobsError = actionJobsError;

// Filters
export const setJobsType = actionSetJobsType;
export const setUsers = actionSetUsers;
export const setDateRange = actionSetDateRange;

// Latest version
export const fetchLatestVersion = actionFetchLatestVersion;
