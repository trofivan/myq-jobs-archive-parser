import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  FETCH_JOBS_CANCEL
} from '../constants/actionTypes';

const jobs = (state = { isFetching: false, list: [] }, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { isFetching: !state.isFetching, list: [] };
    case FETCH_JOBS_CANCEL:
      return { isFetching: !state.isFetching, list: [] };
    case FETCH_JOBS_SUCCESS:
      return { isFetching: !state.isFetching, list: [...action.jobs] };
    case FETCH_JOBS_ERROR:
      return { isFetching: !state.isFetching, list: [] };
    default:
      return state;
  }
};

export default jobs;
