import React from 'react';
import { Tabs, Badge } from 'antd';

import JobsTable from '../../containers/Content/JobsTable';
import WarningsTable from '../../containers/Content/WarningsTable';

export default ({ jobsCount = 0, warningsCount = 0 }) => (
  <Tabs type="card">
    <Tabs.TabPane tab={`Jobs (${jobsCount})`} key="jobs">
      <JobsTable />
    </Tabs.TabPane>
    <Tabs.TabPane
      tab={
        <div>
          Warnings{' '}
          <Badge count={warningsCount} style={{ backgroundColor: '#dc0022' }} />
        </div>
      }
      key="warnings"
    >
      <WarningsTable />
    </Tabs.TabPane>
  </Tabs>
);
