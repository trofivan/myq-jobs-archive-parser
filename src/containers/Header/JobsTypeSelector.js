import { connect } from 'react-redux';
import { setJobsType } from '../../actions';
import JobsTypeSelector from '../../components/Header/JobsTypeSelector';

const mapStateToProps = state => ({
  isDisabled: state.jobs.list.length === 0,
  defaultTypes: state.filter.jobsType
});

const mapDispatchToProps = dispatch => ({
  onChangeJobsType: jobsType => dispatch(setJobsType(jobsType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTypeSelector);
