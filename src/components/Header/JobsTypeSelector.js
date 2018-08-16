import React from 'react';
import { Checkbox } from 'antd';
import { FormattedMessage } from 'react-intl';

export default ({ isDisabled, defaultTypes, onChangeJobsType }) => (
  <FormattedMessage id="App.filter.type">
    {({ print, scan, copy }) => (
      <Checkbox.Group
        disabled={isDisabled}
        options={[
          { label: print, value: 'print' },
          { label: scan, value: 'scan' },
          { label: copy, value: 'copy' }
        ]}
        defaultValue={defaultTypes}
        onChange={onChangeJobsType}
      />
    )}
  </FormattedMessage>
);
