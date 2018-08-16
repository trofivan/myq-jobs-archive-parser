import React from 'react';
import { Table } from 'antd';
import { FormattedMessage } from 'react-intl';

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

const JobsTable = ({ jobs, onClickUserFilter }) => (
  <FormattedMessage id="App.content.jobsTable.col">
    {({ dateAndTime, user, type, printerIp, files }) => (
      <Table dataSource={jobs} pagination={paginationConfig} size="middle">
        <Table.Column
          title={dateAndTime}
          dataIndex="timestamp"
          key="timestamp"
          render={RenderTimestampColumn}
        />
        <Table.Column
          title={user}
          dataIndex="username"
          key="username"
          render={RenderUserColumn(onClickUserFilter)}
        />
        <Table.Column
          title={type}
          dataIndex="jobType"
          key="jobType"
          render={RenderJobTypeColumn}
        />
        <Table.Column
          title={printerIp}
          dataIndex="printerAddr"
          key="printerAddr"
          render={RenderIpAddrColumn}
        />
        <Table.Column
          title={files}
          dataIndex="files"
          key="files"
          render={RenderFilesColumn}
        />
      </Table>
    )}
  </FormattedMessage>
);

export default JobsTable;
