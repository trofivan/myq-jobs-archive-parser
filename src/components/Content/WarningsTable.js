import React from 'react';
import { Table } from 'antd';
import { FormattedMessage } from 'react-intl';

const paginationConfig = {
  pageSize: 50,
  pageSizeOptions: ['50', '100', '150', '200'],
  showSizeChanger: true
};

const WarningsTable = ({ jobs }) => (
  <FormattedMessage id="App.content.warningsTable.col">
    {({ xmlFile, errorMessage }) => (
      <Table dataSource={jobs} pagination={paginationConfig} size="middle">
        <Table.Column title={xmlFile} dataIndex="xmlFile" key="xmlFile" />
        <Table.Column title={errorMessage} dataIndex="error" key="error" />
      </Table>
    )}
  </FormattedMessage>
);

export default WarningsTable;
