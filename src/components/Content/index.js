import React from 'react';
import { Row, Col } from 'antd';

import JobsTable from './JobsTable';

const Content = () => (
  <Row style={{ padding: '16px 0' }}>
    <Col span={22} offset={1}>
      <JobsTable/>
    </Col>
  </Row>
);

export default Content;
