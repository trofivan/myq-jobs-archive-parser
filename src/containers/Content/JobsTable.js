import { connect } from 'react-redux';
import JobsTable from '../../components/Content/JobsTable';
import { setUsers } from '../../actions';
import functionsChaining from '../../libs/functionsChaining';
import {
  filterNoErrors,
  filterByType,
  filterByUsers,
  filterByDaterange
} from '../../../src/libs/jobFilters';

const mapStateToProps = state => ({
  jobs: functionsChaining(
    state.jobs.list,
    filterNoErrors,
    filterByType(state.filter.jobsType),
    filterByUsers(state.filter.users),
    filterByDaterange(state.filter.dateRange)
  )
});

const mapDispatchToProps = dispatch => ({
  onClickUserFilter: user => dispatch(setUsers([user]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsTable);
