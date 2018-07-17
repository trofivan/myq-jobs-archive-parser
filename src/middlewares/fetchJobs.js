import Worker from '../workers/fetchJobs.worker';
import { FETCH_JOBS_REQUEST } from '../constants/actionTypes';
import { fetchJobsSuccess } from '../actions';

export default ({ dispatch }) => {
  const handleMessage = msg => {
    const jobs = msg.data;
    dispatch(fetchJobsSuccess(jobs));
  };

  const fetchJobsWorker = new Worker();
  fetchJobsWorker.addEventListener('message', handleMessage, false);

  return next => action => {
    if (action.type === FETCH_JOBS_REQUEST) {
      const { jobsFolder } = action;
      fetchJobsWorker.postMessage(jobsFolder);
    }

    return next(action);
  };
};
