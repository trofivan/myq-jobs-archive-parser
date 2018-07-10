import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default () => (
  <Select disabled defaultValue="English">
    <Option value="English">English</Option>
    <Option value="Russian">Русский</Option>
  </Select>
);
