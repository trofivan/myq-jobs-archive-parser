import axios from 'axios';
import {
  FETCH_LATEST_VERSION_REQUEST,
  FETCH_LATEST_VERSION_SUCCESS,
  FETCH_LATEST_VERSION_ERROR
} from '../constants/actionTypes';
import { URL_LATEST_PACKAGE_JSON } from '../constants/externalURLs';

const fetchLatestVersionRequest = () => ({
  type: FETCH_LATEST_VERSION_REQUEST
});

const fetchLatestVersionSuccess = latestVersion => ({
  type: FETCH_LATEST_VERSION_SUCCESS,
  latestVersion
});

const fetchLatestVersionError = error => ({
  type: FETCH_LATEST_VERSION_ERROR,
  error
});

export const fetchLatestVersion = () => async dispatch => {
  dispatch(fetchLatestVersionRequest());

  try {
    const latestPackageJson = await axios.get(URL_LATEST_PACKAGE_JSON);
    const latestVersion = latestPackageJson.data.version || null;

    return dispatch(fetchLatestVersionSuccess(latestVersion));
  } catch (err) {
    return dispatch(fetchLatestVersionError(true));
  }
};
