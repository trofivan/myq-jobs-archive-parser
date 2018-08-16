import { combineReducers } from 'redux';

import jobsFolder from './jobsFolder';
import jobs from './jobs';
import filter from './filter';
import locale from './locale';

export default combineReducers({ jobsFolder, locale, jobs, filter });
