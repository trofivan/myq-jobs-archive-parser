import FetchJobsWorker from '../workers/fetchJobs.worker';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_CANCEL
} from '../constants/actionTypes';
import { fetchJobsSuccess, fetchJobsError } from '../actions';

const handleMessage = dispatch => msg => {
  const jobs = msg.data;
  dispatch(fetchJobsSuccess(jobs));
};

const handleError = dispatch => err => {
  dispatch(fetchJobsError(err));
};

const initWorker = dispatch => {
  const worker = new FetchJobsWorker();
  worker.addEventListener('message', handleMessage(dispatch), false);
  worker.addEventListener('error', handleError(dispatch), false);
  return worker;
};

export default ({ dispatch }) => {
  let fetchJobsWorker = initWorker(dispatch);

  return next => action => {
    if (action.type === FETCH_JOBS_REQUEST) {
      const { jobsFolder } = action;
      fetchJobsWorker.postMessage(jobsFolder);
    }

    if (action.type === FETCH_JOBS_CANCEL) {
      fetchJobsWorker.terminate();
      fetchJobsWorker = initWorker(dispatch);
    }

    return next(action);
  };
};
