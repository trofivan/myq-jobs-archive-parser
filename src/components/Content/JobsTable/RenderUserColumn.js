import React from 'react';
import { Icon } from 'antd';

const RenderUserColumn = user => (
  <div>
    {user}{' '}
    <a
      href="#"
      title={`Filter jobs by user ${user}`}
      onClick={e => {
        e.preventDefault();
      }}
    >
      <Icon type="filter" />
    </a>
  </div>
);

export default RenderUserColumn;
