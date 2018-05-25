import React from 'react';
import { Checkbox } from 'antd';

export default () => (
  <Checkbox.Group
    disabled
    options={[
      { label: 'Print', value: 'print' },
      { label: 'Scan', value: 'scan' },
      { label: 'Copy', value: 'copy' }
    ]}
    defaultValue={['print', 'scan', 'copy']}
  />
);
