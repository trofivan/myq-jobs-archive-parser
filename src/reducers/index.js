import { combineReducers } from 'redux';

import jobsFolder from './jobsFolder';
import jobs from './jobs';

export default combineReducers({ jobsFolder, jobs });
