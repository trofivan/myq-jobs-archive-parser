import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';

export default ({ isDisabled, onChangeDateRange }) => (
  <FormattedMessage id="App.filter.dateRange">
    {({ today, thisWeek, thisMonth }) => (
      <DatePicker.RangePicker
        disabled={isDisabled}
        onChange={onChangeDateRange}
        ranges={{
          [today]: [moment().startOf('day'), moment().endOf('day')],
          [thisWeek]: [moment().startOf('week'), moment().endOf('week')],
          [thisMonth]: [moment().startOf('month'), moment().endOf('month')]
        }}
      />
    )}
  </FormattedMessage>
);
