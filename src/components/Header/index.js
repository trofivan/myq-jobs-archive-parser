import React from 'react';
import { Row, Col } from 'antd';

import FolderChooser from './FolderChooser';
import JobsTypeSelector from './JobsTypeSelector';
import LocaleSelector from './LocaleSelector';
import UsersSelector from './UsersSelector';
import DateRangeSelector from './DateRangeSelector';

const styleFlexContainer = {
  display: 'flex',
  width: '100%',
  alignItems: 'center'
};

const FlexContainer = ({ children, style }) => (
  <div style={{ ...styleFlexContainer, ...style }}>{children}</div>
);

export default () => (
  <div style={{ width: '100%', padding: '16px 4.166666667%' }}>
    <FlexContainer>
      <div>
        <FolderChooser />
      </div>
      <div style={{ flexGrow: 1, padding: '0 16px' }}>
        <DateRangeSelector />
      </div>
      <div>
        <LocaleSelector />
      </div>
    </FlexContainer>

    <FlexContainer style={{ paddingTop: 16 }}>
      <div>
        <JobsTypeSelector />
      </div>
      <div style={{ flexGrow: 1, paddingLeft: 16 }}>
        <UsersSelector />
      </div>
    </FlexContainer>
  </div>
);
