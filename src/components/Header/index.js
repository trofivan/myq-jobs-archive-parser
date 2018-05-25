import React from 'react';
import { Row, Col } from 'antd';

import FolderChooser from './FolderChooser';
import JobsTypeSelector from './JobsTypeSelector';
import LocaleSelector from './LocaleSelector';
import UsersSelector from './UsersSelector';
import DateRangeSelector from './DateRangeSelector';

export default () => (
  <div style={{ width: '100%', padding: '16px 4.166666667%' }}>
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <div>
        <FolderChooser />
      </div>
      <div style={{ flexGrow: 1, padding: '0 16px' }}>
        <DateRangeSelector />
      </div>
      <div>
        <LocaleSelector />
      </div>
    </div>

    <div
      style={{
        display: 'flex',
        width: '100%',
        paddingTop: 16,
        alignItems: 'center'
      }}
    >
      <div>
        <JobsTypeSelector />
      </div>
      <div style={{ flexGrow: 1, paddingLeft: 16 }}>
        <UsersSelector />
      </div>
    </div>
  </div>
);
