import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default ({ locale = 'en', handleChangeLocale }) => (
  <Select onChange={handleChangeLocale} value={locale}>
    <Option value="en">English</Option>
    <Option value="ru">Русский</Option>
  </Select>
);
