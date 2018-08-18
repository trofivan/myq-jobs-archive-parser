import React from 'react';
import { Tabs, Badge } from 'antd';
import { injectIntl } from 'react-intl';
import JobsTable from '../../containers/Content/JobsTable';
import WarningsTable from '../../containers/Content/WarningsTable';

const getJobsCount = (total = 0, visible = 0) =>
  visible === total ? total : `${visible} / ${total}`;

const TabsComponent = ({
  jobsCount = 0,
  visibleJobsCount = 0,
  warningsCount = 0,
  intl
}) => (
  <Tabs type="card">
    <Tabs.TabPane
      tab={`${intl.formatMessage({
        id: 'App.content.tab.jobs'
      })} (${getJobsCount(jobsCount, visibleJobsCount)})`}
      key="jobs"
    >
      <JobsTable />
    </Tabs.TabPane>
    <Tabs.TabPane
      tab={
        <div>
          {intl.formatMessage({
            id: 'App.content.tab.warnings'
          })}{' '}
          <Badge count={warningsCount} style={{ backgroundColor: '#dc0022' }} />
        </div>
      }
      key="warnings"
    >
      <WarningsTable />
    </Tabs.TabPane>
  </Tabs>
);

export default injectIntl(TabsComponent);
