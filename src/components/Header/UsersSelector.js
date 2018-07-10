import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default ({ isDisabled, users, selectedUsers, onChangeUsers }) => {
  console.log(selectedUsers);
  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Users"
      mode="multiple"
      optionFilterProp="children"
      allowClear
      value={selectedUsers}
      disabled={isDisabled}
      onChange={onChangeUsers}
    >
      {users.map((user, idx) => (
        <Option key={idx} value={user}>
          {user}
        </Option>
      ))}
    </Select>
  );
};
