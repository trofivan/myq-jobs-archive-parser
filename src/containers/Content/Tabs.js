import { connect } from 'react-redux';
import Tabs from '../../components/Content/Tabs';

const mapStateToProps = state => ({
  jobsCount: state.jobs.list.filter(job => !job.error).length,
  warningsCount: state.jobs.list.filter(job => job.error).length
});

export default connect(mapStateToProps)(Tabs);
