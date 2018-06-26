import { connect } from 'react-redux';
import { choiceJobsFolder } from '../actions';
import FolderChooser from '../components/Header/FolderChooser';

const mapStateToProps = (state, ownProps) => ({
  jobsFolder: state.jobsFolder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChoiceJobsFolder: newFolder => dispatch(choiceJobsFolder(newFolder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderChooser);
