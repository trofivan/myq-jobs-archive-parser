import { connect } from 'react-redux';
import JobsTable from '../components/Content/JobsTable';

const mapStateToProps = state => ({
  jobs: state.jobs.list
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
