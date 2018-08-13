import React from 'react';

import { Row, Col } from 'antd';
import Tabs from '../../containers/Content/Tabs';

const Content = () => (
  <Row className="content">
    <Col span={22} offset={1}>
      <Tabs />
    </Col>
  </Row>
);

export default Content;
