import React from 'react';
import { Table } from 'antd';
import { injectIntl } from 'react-intl';

const paginationConfig = {
  pageSize: 50,
  pageSizeOptions: ['50', '100', '150', '200'],
  showSizeChanger: true
};

const WarningsTable = ({ jobs, intl }) => (
  <Table dataSource={jobs} pagination={paginationConfig} size="middle">
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.warningsTable.col.xmlFile'
      })}
      dataIndex="xmlFile"
      key="xmlFile"
    />
    <Table.Column
      title={intl.formatMessage({
        id: 'App.content.warningsTable.col.errorMessage'
      })}
      dataIndex="error"
      key="error"
    />
  </Table>
);

export default injectIntl(WarningsTable);
