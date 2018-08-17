import React from 'react';
import { Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

const RenderJobTypeColumn = jobType => {
  switch (jobType) {
    case 'print':
      return (
        <FormattedMessage id="App.content.jobsTable.data.type.print">
          {titleMsg => <Icon type="printer" title={titleMsg} />}
        </FormattedMessage>
      );
    case 'scan':
      return (
        <FormattedMessage id="App.content.jobsTable.data.type.scan">
          {titleMsg => <Icon type="profile" title={titleMsg} />}
        </FormattedMessage>
      );
    case 'copy':
      return (
        <FormattedMessage id="App.content.jobsTable.data.type.copy">
          {titleMsg => <Icon type="copy" title={titleMsg} />}
        </FormattedMessage>
      );
    default:
      return '';
  }
};

export default RenderJobTypeColumn;
