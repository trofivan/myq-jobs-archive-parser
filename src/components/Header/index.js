import React from 'react';

import FolderChooser from '../../containers/Header/FolderChooser';
import JobsTypeSelector from '../../containers/Header/JobsTypeSelector';
import UsersSelector from '../../containers/Header/UsersSelector';
import DateRangeSelector from '../../containers/Header/DateRangeSelector';
import LocaleSelector from './LocaleSelector';

import './index.css';

export default () => (
  <div className="header">
    <div className="header__col header__col--first">
      <div className="header__row">
        <FolderChooser />
      </div>
      <div className="header__row header__row--all-width header__row--padding-left header__row--padding-right">
        <DateRangeSelector />
      </div>
      <div className="header__row">
        <LocaleSelector />
      </div>
    </div>
    <div className="header__col">
      <div className="header__row">
        <JobsTypeSelector />
      </div>
      <div className="header__row header__row--all-width header__row--padding-left">
        <UsersSelector />
      </div>
    </div>
  </div>
);
