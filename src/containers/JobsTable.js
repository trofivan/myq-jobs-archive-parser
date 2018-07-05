import { connect } from 'react-redux';
import JobsTable from '../components/Content/JobsTable';

const getVisibleJobs = (jobs = [], jobsType = []) =>
  jobs.filter(job => !job.error && jobsType.includes(job.jobType));

const mapStateToProps = state => ({
  jobs: getVisibleJobs(state.jobs.list, state.filter.jobsType)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
