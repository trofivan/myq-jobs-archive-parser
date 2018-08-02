import { connect } from 'react-redux';
import Tabs from '../../components/Content/Tabs';
import functionsChaining from '../../libs/functionsChaining';
import {
  filterNoErrors,
  filterByType,
  filterByUsers,
  filterByDaterange
} from '../../../src/libs/jobFilters';

const mapStateToProps = state => ({
  jobsCount: state.jobs.list.filter(job => !job.error).length,
  visibleJobsCount: functionsChaining(
    state.jobs.list,
    filterNoErrors,
    filterByType(state.filter.jobsType),
    filterByUsers(state.filter.users),
    filterByDaterange(state.filter.dateRange)
  ).length,
  warningsCount: state.jobs.list.filter(job => job.error).length
});

export default connect(mapStateToProps)(Tabs);
