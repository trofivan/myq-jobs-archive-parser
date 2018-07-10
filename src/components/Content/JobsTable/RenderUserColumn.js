import React from 'react';
import { Icon } from 'antd';

const RenderUserColumn = onClickUserFilter => user => (
  <div>
    {user}{' '}
    <a
      href="#"
      title={`Filter jobs by user ${user}`}
      onClick={() => onClickUserFilter(user)}
    >
      <Icon type="filter" />
    </a>
  </div>
);

export default RenderUserColumn;
