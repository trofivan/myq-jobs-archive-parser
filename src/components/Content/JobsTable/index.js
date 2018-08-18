import React from 'react';
import { Table } from 'antd';
import { injectIntl } from 'react-intl';

import RenderFilesColumn from './RenderFilesColumn';
import RenderIpAddrColumn from './RenderIpAddrColumn';
import RenderJobTypeColumn from './RenderJobTypeColumn';
import RenderUserColumn from './RenderUserColumn';
import RenderTimestampColumn from './RenderTimestampColumn';

const paginationConfig = {
  pageSize: 50,
  pageSizeOptions: ['50', '100', '150', '200'],
  showSizeChanger: true
};

const JobsTable = ({ jobs, onClickUserFilter, intl }) => (
  <Table dataSource={jobs} pagination={paginationConfig} size="middle">
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.jobsTable.col.dateAndTime'
      })}
      dataIndex="timestamp"
      key="timestamp"
      render={RenderTimestampColumn}
    />
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.jobsTable.col.user'
      })}
      dataIndex="username"
      key="username"
      render={RenderUserColumn(onClickUserFilter)}
    />
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.jobsTable.col.type'
      })}
      dataIndex="jobType"
      key="jobType"
      render={RenderJobTypeColumn}
    />
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.jobsTable.col.printerIp'
      })}
      dataIndex="printerAddr"
      key="printerAddr"
      render={RenderIpAddrColumn}
    />
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.jobsTable.col.files'
      })}
      dataIndex="files"
      key="files"
      render={RenderFilesColumn}
    />
  </Table>
);

export default injectIntl(JobsTable);
