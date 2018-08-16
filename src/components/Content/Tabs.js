import React from 'react';
import { Tabs, Badge } from 'antd';
import { FormattedMessage } from 'react-intl';
import JobsTable from '../../containers/Content/JobsTable';
import WarningsTable from '../../containers/Content/WarningsTable';

const getJobsCount = (total = 0, visible = 0) =>
  visible === total ? total : `${visible} / ${total}`;

export default ({ jobsCount = 0, visibleJobsCount = 0, warningsCount = 0 }) => (
  <FormattedMessage id="App.content.tab">
    {({ jobs: tabJobsText, warnings: tabWarnText }) => (
      <Tabs type="card">
        <Tabs.TabPane
          tab={`${tabJobsText} (${getJobsCount(jobsCount, visibleJobsCount)})`}
          key="jobs"
        >
          <JobsTable />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <div>
              {tabWarnText}{' '}
              <Badge
                count={warningsCount}
                style={{ backgroundColor: '#dc0022' }}
              />
            </div>
          }
          key="warnings"
        >
          <WarningsTable />
        </Tabs.TabPane>
      </Tabs>
    )}
  </FormattedMessage>
);
