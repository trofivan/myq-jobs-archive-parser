import { connect } from 'react-redux';
import JobsTable from '../components/Content/JobsTable';

const mapStateToProps = state => ({
  jobs: state.jobs.list.filter(job => !job.error)
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
