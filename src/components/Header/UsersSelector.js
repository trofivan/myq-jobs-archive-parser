import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default () => (
  <Select
    showSearch
    style={{ width: '100%' }}
    placeholder="Users"
    mode="multiple"
    optionFilterProp="children"
    allowClear
    disabled
  >
    <Option value="Jon_Snow">Jon Snow</Option>
    <Option value="Daenerys_Targaryen">Daenerys Targaryen</Option>
    <Option value="Cersei_Lannister">Cersei Lannister</Option>
    <Option value="Khal_Drogo">Khal Drogo</Option>
    <Option value="Eddard_Stark">Eddard Stark</Option>
    <Option value="Tyrion_Lannister">Tyrion Lannister</Option>
    <Option value="Sansa_Stark">Sansa Stark</Option>
    <Option value="Petyr_Baelish">Petyr Baelish</Option>
    <Option value="Jorah_Mormont">Jorah Mormont</Option>
    <Option value="Brienne_de_Tarth">Brienne de Tarth</Option>
  </Select>
);
