import { connect } from 'react-redux';
import { changeJobsFolder } from '../actions';
import FolderChooser from '../components/Header/FolderChooser';

const mapStateToProps = (state, ownProps) => ({
  jobsFolder: state.jobsFolder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeJobsFolder: newFolder => dispatch(changeJobsFolder(newFolder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderChooser);
