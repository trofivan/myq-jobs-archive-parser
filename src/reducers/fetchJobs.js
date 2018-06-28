import * as types from '../constants/actionTypes';

const fetchJobs = (state = { isFetching: false, jobs: [] }, action) => {
  switch (action.type) {
    case types.FETCH_JOBS_REQUEST:
      return { isFetching: !state.isFetching, jobs: [] };
    case types.FETCH_JOBS_SUCCESS:
      return { isFetching: !state.isFetching, jobs: [...action.jobs] };
    case types.FETCH_JOBS_ERROR:
      return { isFetching: !state.isFetching, jobs: [] };
    default:
      return state;
  }
};

export default fetchJobs;
