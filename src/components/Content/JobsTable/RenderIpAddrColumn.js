import React from 'react';
import { Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

const RenderIpAddrColumn = ipAddr => (
  <FormattedMessage id="App.content.jobsTable.data.webInterface">
    {titleText => (
      <div>
        {ipAddr}{' '}
        <a
          title={`${titleText} ${ipAddr}`}
          onClick={e => {
            e.preventDefault();
            nw.Shell.openExternal(`http://${ipAddr}`);
          }}
        >
          <Icon type="export" />
        </a>
      </div>
    )}
  </FormattedMessage>
);

export default RenderIpAddrColumn;
