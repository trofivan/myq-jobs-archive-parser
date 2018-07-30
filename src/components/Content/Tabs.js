import React from 'react';
import { Tabs, Badge } from 'antd';

import JobsTable from '../../containers/Content/JobsTable';
import WarningsTable from '../../containers/Content/WarningsTable';

const getJobsCount = (total = 0, visible = 0) =>
  visible === total ? total : `${visible} / ${total}`;

export default ({ jobsCount = 0, visibleJobsCount = 0, warningsCount = 0 }) => (
  <Tabs type="card">
    <Tabs.TabPane
      tab={`Jobs (${getJobsCount(jobsCount, visibleJobsCount)})`}
      key="jobs"
    >
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
