import getReduxStateJobs from '../libs/getReduxStateJobs';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR
} from '../constants/actionTypes';

// Sync actions
const fetchJobsRequest = jobsFolder => ({
  type: FETCH_JOBS_REQUEST,
  jobsFolder
});

const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  jobs
});

const fetchJobsError = error => ({
  type: FETCH_JOBS_ERROR,
  error
});

// Async actions
const fetchJobs = jobsFolder => async dispatch => {
  dispatch(fetchJobsRequest(jobsFolder));

  try {
    const jobs = (await getReduxStateJobs(jobsFolder)).map((job, key) => ({
      key,
      ...job
    }));
    dispatch(fetchJobsSuccess(jobs));
  } catch (error) {
    dispatch(fetchJobsError(error));
  }
};

export default fetchJobs;
