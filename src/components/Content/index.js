import React from 'react';
import { Row, Col } from 'antd';
import Tabs from '../../containers/Content/Tabs';

const Content = () => (
  <Row style={{ padding: '16px 0' }}>
    <Col span={22} offset={1}>
      <Tabs />
    </Col>
  </Row>
);

export default Content;
