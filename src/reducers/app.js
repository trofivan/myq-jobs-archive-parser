import { version as versionCurrent } from '../../package.json';
import {
  FETCH_LATEST_VERSION_REQUEST,
  FETCH_LATEST_VERSION_SUCCESS,
  FETCH_LATEST_VERSION_ERROR
} from '../constants/actionTypes';

const defaultState = {
  versionCurrent,
  versionLatest: null,
  versionIsFetching: false,
  versionFetchingError: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LATEST_VERSION_REQUEST:
      return {
        ...state,
        versionIsFetching: !state.versionIsFetching
      };
    case FETCH_LATEST_VERSION_SUCCESS:
      return {
        ...state,
        versionIsFetching: !state.versionIsFetching,
        versionLatest: action.latestVersion
      };
    case FETCH_LATEST_VERSION_ERROR:
      return {
        ...state,
        versionIsFetching: !state.versionIsFetching,
        versionFetchingError: action.error
      };
    default:
      return state;
  }
};
