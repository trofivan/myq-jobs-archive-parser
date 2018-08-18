import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { injectIntl } from 'react-intl';

const DateRangeSelector = ({ isDisabled, onChangeDateRange, intl }) => (
  <DatePicker.RangePicker
    disabled={isDisabled}
    onChange={onChangeDateRange}
    ranges={{
      [intl.formatMessage({ id: 'App.filter.dateRange.today' })]: [
        moment().startOf('day'),
        moment().endOf('day')
      ],
      [intl.formatMessage({ id: 'App.filter.dateRange.thisWeek' })]: [
        moment().startOf('week'),
        moment().endOf('week')
      ],
      [intl.formatMessage({ id: 'App.filter.dateRange.thisMonth' })]: [
        moment().startOf('month'),
        moment().endOf('month')
      ]
    }}
  />
);

export default injectIntl(DateRangeSelector);
