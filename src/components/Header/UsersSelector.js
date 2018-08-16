import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Select } from 'antd';
const { Option } = Select;

export default ({ isDisabled, users, selectedUsers, onChangeUsers }) => (
  <FormattedMessage id="App.filter.users.placeholder">
    {placeholderText => (
      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder={placeholderText}
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
    )}
  </FormattedMessage>
);
