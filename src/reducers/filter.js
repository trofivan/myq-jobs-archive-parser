import {
  JOBS_FILTER_SET_TYPE,
  JOBS_FILTER_SET_DATE_RANGE,
  JOBS_FILTER_SET_USERS
} from '../constants/actionTypes';

const initState = {
  users: [],
  jobsType: ['print', 'scan', 'copy'],
  dateRange: [null, null]
};

const filter = (state = initState, action) => {
  switch (action.type) {
    case JOBS_FILTER_SET_TYPE:
      return { ...state, jobsType: action.jobsType };
    case JOBS_FILTER_SET_USERS:
      return { ...state, users: action.users };
    case JOBS_FILTER_SET_DATE_RANGE:
      return { ...state, dateRange: action.dateRange };
    default:
      return state;
  }
};

export default filter;
