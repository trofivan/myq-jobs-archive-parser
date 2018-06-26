import React from 'react';
import { Icon } from 'antd';

const RenderJobTypeColumn = jobType => {
  switch (jobType) {
    case 'print':
      return <Icon type="printer" title="Print" />;
    case 'scan':
      return <Icon type="profile" title="Scan" />;
    case 'copy':
      return <Icon type="copy" title="Copy" />;
    default:
      return '';
  }
};

export default RenderJobTypeColumn;
