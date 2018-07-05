import {
  JOBS_FILTER_SET_TYPE,
  JOBS_FILTER_SET_DATE_START,
  JOBS_FILTER_SET_DATE_END,
  JOBS_FILTER_SET_USERS
} from '../constants/actionTypes';

const initState = {
  users: [],
  jobsType: ['print', 'scan', 'copy'],
  dateStart: null,
  dateEnd: null
};

const filter = (state = initState, action) => {
  switch (action.type) {
    case JOBS_FILTER_SET_TYPE:
      return { ...state, jobsType: action.jobsType };
    case JOBS_FILTER_SET_USERS:
      return { ...state, users: action.users };
    case JOBS_FILTER_SET_DATE_START:
      return { ...state, dateStart: action.dateStart };
    case JOBS_FILTER_SET_DATE_END:
      return { ...state, dateEnd: action.dateEnd };
    default:
      return state;
  }
};

export default filter;
