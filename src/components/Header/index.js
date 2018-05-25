import React from 'react';
import { Row, Col, Form, Input, Checkbox, Select, DatePicker } from 'antd';
import moment from 'moment';

const styleRow = {
  padding: '16px 0'
};

const Header = () => (
  <Row style={styleRow}>
    <Col span={22} offset={1}>
      <Form layout="inline">
        <Form.Item>
          <Input type="file" nwdirectory="true" />
        </Form.Item>
        <Form.Item>
          <Checkbox.Group
            options={[
              { label: 'Print', value: 'print' },
              { label: 'Scan', value: 'scan' },
              { label: 'Copy', value: 'copy' }
            ]}
            defaultValue={['print', 'scan', 'copy']}
          />
        </Form.Item>
        <Form.Item>
          <Select
            showSearch
            style={{ width: 160 }}
            placeholder="Username"
            optionFilterProp="children"
            allowClear
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="trofivan">trofivan</Select.Option>
            <Select.Option value="trofiiva">trofiiva</Select.Option>
            <Select.Option value="antm">antm</Select.Option>
            <Select.Option value="korotand">korotand</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <DatePicker.RangePicker
            ranges={{
              Today: [moment(), moment()],
              'This Week': [moment().startOf('week'), moment().endOf('week')],
              'This Month': [moment().startOf('month'), moment().endOf('month')]
            }}
          />
        </Form.Item>
      </Form>
    </Col>
  </Row>
);

export default Header;
