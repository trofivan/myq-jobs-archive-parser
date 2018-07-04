import React from 'react';
import { Checkbox } from 'antd';

export default ({ isDisabled, defaultTypes, onChangeJobsType }) => (
  <Checkbox.Group
    disabled={isDisabled}
    options={[
      { label: 'Print', value: 'print' },
      { label: 'Scan', value: 'scan' },
      { label: 'Copy', value: 'copy' }
    ]}
    defaultValue={defaultTypes}
    onChange={onChangeJobsType}
  />
);
