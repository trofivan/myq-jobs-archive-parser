import { connect } from 'react-redux';
import WarningsTable from '../../components/Content/WarningsTable';

const filterJobs = (jobs = [], ...funcs) =>
  funcs.reduce((acc, fn) => fn(acc), jobs);

const filterWithErrors = jobs => jobs.filter(job => job.error);

const mapStateToProps = state => ({
  jobs: filterJobs(state.jobs.list, filterWithErrors)
});

export default connect(mapStateToProps)(WarningsTable);
