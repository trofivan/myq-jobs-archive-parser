import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default () => (
  <DatePicker.RangePicker
    disabled
    ranges={{
      Today: [moment(), moment()],
      'This Week': [moment().startOf('week'), moment().endOf('week')],
      'This Month': [moment().startOf('month'), moment().endOf('month')]
    }}
  />
);
