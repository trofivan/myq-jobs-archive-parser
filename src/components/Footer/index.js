import React from 'react';
import { Row, Col, Icon } from 'antd';

const styleRow = {
  padding: '16px 0',
  backgroundColor: '#ffffff'
};

export default () => (
  <Row type="flex" align="middle" style={styleRow}>
    <Col span={11} offset={1}>
      <img src="assets/logo.png" />
    </Col>
    <Col span={11} style={{ textAlign: 'right' }}>
      Copyright &copy; 2018 Ivan Trofimov<br />
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          nw.Shell.openExternal(
            'https://github.com/trofivan/myq-jobs-archive-parser/blob/master/LICENSE'
          );
        }}
      >
        MIT License
      </a>
      <br />
      <Icon type="github" />{' '}
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          nw.Shell.openExternal(
            'https://github.com/trofivan/myq-jobs-archive-parser'
          );
        }}
      >
        myq-jobs-archive-parser
      </a>
    </Col>
  </Row>
);
