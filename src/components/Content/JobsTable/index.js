import React from 'react';
import { Table } from 'antd';

import RenderFilesColumn from './RenderFilesColumn';
import RenderIpAddrColumn from './RenderIpAddrColumn';
import RenderJobTypeColumn from './RenderJobTypeColumn';
import RenderUserColumn from './RenderUserColumn';

const JobsTable = ({ jobs }) => (
  <Table dataSource={jobs} pagination={false} size="middle">
    <Table.Column title="Date and time" dataIndex="timestamp" key="timestamp" />
    <Table.Column
      title="User"
      dataIndex="username"
      key="username"
      render={RenderUserColumn}
    />
    <Table.Column
      title="Type"
      dataIndex="jobType"
      key="jobType"
      render={RenderJobTypeColumn}
    />
    <Table.Column
      title="Printer IP address"
      dataIndex="printerAddr"
      key="printerAddr"
      render={RenderIpAddrColumn}
    />
    <Table.Column
      title="Files"
      dataIndex="files"
      key="files"
      render={RenderFilesColumn}
    />
  </Table>
);

export default JobsTable;
