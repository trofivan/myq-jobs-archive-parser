import actionSetJobsFolder from './setJobsFolder';
import actionFetchJobs from './fetchJobs';
import {
  setJobsType as actionSetJobsType,
  setUsers as actionSetUsers,
  setDateRange as actionSetDateRange
} from './jobsFilter';

export const setJobsFolder = actionSetJobsFolder;

export const fetchJobs = actionFetchJobs;

export const setJobsType = actionSetJobsType;
export const setUsers = actionSetUsers;
export const setDateRange = actionSetDateRange;
