import { connect } from 'react-redux';
import { setJobsFolder } from '../actions';
import FolderChooser from '../components/Header/FolderChooser';

const mapStateToProps = (state, ownProps) => ({
  jobsFolder: state.jobsFolder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetJobsFolder: newFolder => dispatch(setJobsFolder(newFolder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderChooser);
