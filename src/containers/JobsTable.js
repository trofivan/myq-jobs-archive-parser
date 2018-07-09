import { connect } from 'react-redux';
import JobsTable from '../components/Content/JobsTable';

const filterJobs = (jobs = [], ...funcs) =>
  funcs.reduce((acc, fn) => fn(acc), jobs);

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

const mapStateToProps = state => ({
  jobs: filterJobs(
    state.jobs.list,
    filterNoErrors,
    filterByType(state.filter.jobsType),
    filterByUsers(state.filter.users),
    filterByDaterange(state.filter.dateRange)
  )
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
