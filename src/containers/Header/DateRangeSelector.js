import { connect } from 'react-redux';
import DateRangeSelector from '../../components/Header/DateRangeSelector';
import moment from 'moment';

const mapStateToProps = state => ({
  isDisabled: state.jobs.list.length === 0
});

const mapDispatchToProps = dispatch => ({
  onChangeDateRange: date => {
    const dateStart = date[0].toString();
    const dateEnd = date[1].toString();
    console.log({ dateStart, dateEnd });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangeSelector);
