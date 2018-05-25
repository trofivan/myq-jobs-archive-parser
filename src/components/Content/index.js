import React from 'react';
import { Row, Col } from 'antd';

const Content = () => (
  <Row style={{ paddingTop: 16, marginBottom: 16 }}>
    <Col span={22} offset={1}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </Col>
  </Row>
);

export default Content;
