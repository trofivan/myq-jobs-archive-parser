import React from 'react';
import { Table } from 'antd';

const paginationConfig = {
  pageSize: 50,
  pageSizeOptions: ['50', '100', '150', '200'],
  showSizeChanger: true
};

const WarningsTable = ({ jobs }) => (
  <Table dataSource={jobs} pagination={paginationConfig} size="middle">
    <Table.Column title="XML file" dataIndex="xmlFile" key="xmlFile" />
    <Table.Column title="Error message" dataIndex="error" key="error" />
  </Table>
);

export default WarningsTable;
