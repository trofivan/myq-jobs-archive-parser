import React from 'react';
import { Row, Col, Icon } from 'antd';
import { name as appName, version as appVer } from '../../../package.json';
import {
  URL_LATEST_RELEASE,
  URL_LICENSE,
  URL_PROJECT
} from '../../constants/externalURLs';

const styleRow = {
  padding: '16px 0',
  backgroundColor: '#ffffff'
};

const UrlLicense = () => (
  <a
    href="#License"
    onClick={e => {
      e.preventDefault();
      nw.Shell.openExternal(URL_LICENSE);
    }}
  >
    MIT License
  </a>
);

const UrlProject = () => (
  <a
    href="#GitHub"
    onClick={e => {
      e.preventDefault();
      nw.Shell.openExternal(URL_PROJECT);
    }}
  >
    {appName}
  </a>
);

const UrlLatestRelease = () => (
  <a
    href="#LatestRelease"
    onClick={e => {
      e.preventDefault();
      nw.Shell.openExternal(URL_LATEST_RELEASE);
    }}
  >
    v{appVer}
  </a>
);

export default () => (
  <Row type="flex" align="middle" style={styleRow}>
    <Col span={11} offset={1}>
      <img src="assets/logo.svg" alt="MyQ Jobs Archive Parser" />
    </Col>
    <Col span={11} style={{ textAlign: 'right' }}>
      Copyright &copy; 2018 Ivan Trofimov
      <br />
      <UrlLicense />
      <br />
      <Icon type="github" /> <UrlProject />, <UrlLatestRelease />
    </Col>
  </Row>
);
