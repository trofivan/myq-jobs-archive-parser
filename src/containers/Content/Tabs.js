import { connect } from 'react-redux';
import Tabs from '../../components/Content/Tabs';
import functionsChaining from '../../libs/functionsChaining';

const filterNoErrors = jobs => jobs.filter(job => !job.error);

const filterByType = types => jobs =>
  jobs.filter(job => types.includes(job.jobType));

const filterByUsers = users => jobs =>
  jobs.filter(
    job => (users.length === 0 ? true : users.includes(job.username))
  );

const filterByDaterange = ([start, end]) => jobs =>
  start === null && end === null
    ? jobs
    : jobs.filter(({ timestamp }) => timestamp >= start && timestamp <= end);

const getVisibleJobsCount = jobs => jobs.length;

const mapStateToProps = state => ({
  jobsCount: state.jobs.list.filter(job => !job.error).length,
  visibleJobsCount: functionsChaining(
    state.jobs.list,
    filterNoErrors,
    filterByType(state.filter.jobsType),
    filterByUsers(state.filter.users),
    filterByDaterange(state.filter.dateRange),
    getVisibleJobsCount
  ),
  warningsCount: state.jobs.list.filter(job => job.error).length
});

export default connect(mapStateToProps)(Tabs);
