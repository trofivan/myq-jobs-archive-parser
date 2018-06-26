import React from 'react';
import { Icon } from 'antd';

const RenderIpAddrColumn = ipAddr => (
  <div>
    {ipAddr}{' '}
    <a
      href="#"
      title={`Web interface ${ipAddr}`}
      onClick={e => {
        e.preventDefault();
        nw.Shell.openExternal(`http://${ipAddr}`);
      }}
    >
      <Icon type="export" />
    </a>
  </div>
);

export default RenderIpAddrColumn;
