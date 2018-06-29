import { connect } from 'react-redux';
import { setJobsFolder, fetchJobs } from '../actions';
import FolderChooser from '../components/Header/FolderChooser';

const mapStateToProps = state => ({
  jobsFolder: state.jobsFolder,
  isFetchingJobs: state.jobs.isFetching
});

const mapDispatchToProps = dispatch => ({
  onSetJobsFolder: newFolder => {
    if (newFolder !== '') {
      dispatch(setJobsFolder(newFolder));
      dispatch(fetchJobs(newFolder));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderChooser);
