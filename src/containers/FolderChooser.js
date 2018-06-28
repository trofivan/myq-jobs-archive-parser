import { connect } from 'react-redux';
import { setJobsFolder, fetchJobs } from '../actions';
import FolderChooser from '../components/Header/FolderChooser';

const mapStateToProps = (state, ownProps) => ({
  jobsFolder: state.jobsFolder
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSetJobsFolder: newFolder => {
    dispatch(setJobsFolder(newFolder));
    dispatch(fetchJobs(newFolder));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderChooser);
