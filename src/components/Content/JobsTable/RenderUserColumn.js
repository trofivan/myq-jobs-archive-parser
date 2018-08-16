import React from 'react';
import { Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

const RenderUserColumn = onClickUserFilter => user => (
  <FormattedMessage id="App.content.jobsTable.data.filterByUser">
    {titleText => (
      <div>
        {user}{' '}
        <a
          title={`${titleText} ${user}`}
          onClick={() => onClickUserFilter(user)}
        >
          <Icon type="filter" />
        </a>
      </div>
    )}
  </FormattedMessage>
);

export default RenderUserColumn;
