import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default ({ isDisabled, onChangeDateRange }) => (
  <DatePicker.RangePicker
    disabled={isDisabled}
    onChange={onChangeDateRange}
    ranges={{
      Today: [moment().startOf('day'), moment().endOf('day')],
      'This Week': [moment().startOf('week'), moment().endOf('week')],
      'This Month': [moment().startOf('month'), moment().endOf('month')]
    }}
  />
);
