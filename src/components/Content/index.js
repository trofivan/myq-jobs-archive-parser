import React from 'react';
import { Row, Col, Table, Icon } from 'antd';

const columns = [
  { title: 'Date and time', dataIndex: 'timeStamp', key: 'timeStamp' },
  {
    title: 'User',
    dataIndex: 'username',
    key: 'username',
    render: user => (
      <div>
        {user}{' '}
        <a
          href="#"
          title={`Filter jobs by user ${user}`}
          onClick={e => {
            e.preventDefault();
            console.log(user);
          }}
        >
          <Icon type="filter" />
        </a>
      </div>
    )
  },
  {
    title: 'Type',
    dataIndex: 'jobType',
    key: 'jobType',
    render: jobType => {
      switch (jobType) {
        case 'print':
          return <Icon type="printer" title="Print" />;
        case 'scan':
          return <Icon type="profile" title="Scan" />;
        case 'copy':
          return <Icon type="copy" title="Copy" />;
        default:
          return '';
      }
    }
  },
  {
    title: 'Printer IP address',
    dataIndex: 'printerAddr',
    key: 'printerAddr',
    render: ipAddr => (
      <div>
        {ipAddr}{' '}
        <a
          href="#"
          title={`Web interface ${ipAddr}`}
          onClick={e => {
            e.preventDefault();
            nw.Shell.openExternal(`http://${ipAddr}`);
          }}
        >
          <Icon type="export" />
        </a>
      </div>
    )
  },
  {
    title: 'Files',
    dataIndex: 'files',
    key: 'files',
    render: (files, { path }) => (
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {files.map((name, index) => (
          <li key={index} href="#">
            <a
              href="file:///${path}/${name}"
              onClick={e => {
                e.preventDefault();
                nw.Shell.openExternal(`file:///${path}/${name}`);
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    )
  }
];

const dataSource = [
  {
    key: 1,
    timeStamp: '2018-01-01 12:00:00',
    username: 'trofivan',
    jobType: 'print',
    serverName: 'srv01.domain.local',
    printerAddr: '10.100.10.17',
    path: './2018-01-01-0001/',
    xml: 'job-001.xml',
    files: ['job-001.pdf']
  },
  {
    key: 2,
    timeStamp: '2018-01-01 12:05:00',
    username: 'otheruser',
    jobType: 'scan',
    serverName: 'srv01.domain.local',
    printerAddr: '10.100.10.19',
    path: './2018-01-01-0001/',
    xml: 'job-002.xml',
    files: ['job-002.pdf']
  },
  {
    key: 3,
    timeStamp: '2018-01-01 13:00:00',
    username: 'trofivan',
    jobType: 'copy',
    serverName: 'srv01.domain.local',
    printerAddr: '10.100.10.18',
    path: './2018-01-01-0001/',
    xml: 'job-003.xml',
    files: ['job-003-0.pdf', 'job-003-1.pdf']
  }
];

const Content = () => (
  <Row style={{ padding: '16px 0' }}>
    <Col span={22} offset={1}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size="middle"
      />
    </Col>
  </Row>
);

export default Content;
