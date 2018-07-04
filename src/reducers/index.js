import { combineReducers } from 'redux';

import jobsFolder from './jobsFolder';
import jobs from './jobs';
import filter from './filter';

export default combineReducers({ jobsFolder, jobs, filter });
