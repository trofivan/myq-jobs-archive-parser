import { connect } from 'react-redux';
import UsersSelector from '../../components/Header/UsersSelector';
import { setUsers } from '../../actions';

const getUsersForFilter = (jobsList = []) => {
  const users = jobsList
    .map(job => job.username || null)
    .filter(user => user !== null);

  return [...new Set(users)].sort((a, b) => a.localeCompare(b));
};

const mapStateToProps = state => ({
  isDisabled: state.jobs.list.length === 0,
  users: getUsersForFilter(state.jobs.list),
  selectedUsers: state.filter.users
});

const mapDispatchToProps = dispatch => ({
  onChangeUsers: users => dispatch(setUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersSelector);
