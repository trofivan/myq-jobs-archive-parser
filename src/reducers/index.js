import { combineReducers } from 'redux';

import jobsFolder from './jobsFolder';
import fetchJobs from './fetchJobs';

export default combineReducers({ jobsFolder, fetchJobs });
