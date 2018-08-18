import React from 'react';
import { Checkbox } from 'antd';
import { injectIntl } from 'react-intl';

const JobsTypeSelector = ({
  isDisabled,
  defaultTypes,
  onChangeJobsType,
  intl
}) => (
  <Checkbox.Group
    disabled={isDisabled}
    options={[
      {
        label: intl.formatMessage({ id: 'App.filter.type.print' }),
        value: 'print'
      },
      {
        label: intl.formatMessage({ id: 'App.filter.type.scan' }),
        value: 'scan'
      },
      {
        label: intl.formatMessage({ id: 'App.filter.type.copy' }),
        value: 'copy'
      }
    ]}
    defaultValue={defaultTypes}
    onChange={onChangeJobsType}
  />
);

export default injectIntl(JobsTypeSelector);
