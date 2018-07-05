import { connect } from 'react-redux';
import JobsTable from '../components/Content/JobsTable';

const getVisibleJobs = (jobs = [], types = [], users = []) =>
  jobs
    .filter(job => !job.error)
    .filter(job => types.includes(job.jobType))
    .filter(job => (users.length === 0 ? true : users.includes(job.username)));

const mapStateToProps = state => ({
  jobs: getVisibleJobs(
    state.jobs.list,
    state.filter.jobsType,
    state.filter.users
  )
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
