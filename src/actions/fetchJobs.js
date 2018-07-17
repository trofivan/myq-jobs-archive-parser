import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  FETCH_JOBS_CANCEL
} from '../constants/actionTypes';

export const fetchJobsRequest = jobsFolder => ({
  type: FETCH_JOBS_REQUEST,
  jobsFolder
});

export const fetchJobsCancel = () => ({
  type: FETCH_JOBS_CANCEL
});

export const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  jobs
});

export const fetchJobsError = error => ({
  type: FETCH_JOBS_ERROR,
  error
});
