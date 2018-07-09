import { connect } from 'react-redux';
import moment from 'moment';
import { setDateRange } from '../../actions';
import DateRangeSelector from '../../components/Header/DateRangeSelector';

const mapStateToProps = state => ({
  isDisabled: state.jobs.list.length === 0
});

const mapDispatchToProps = dispatch => ({
  onChangeDateRange: date => {
    const start = date[0] || null;
    const end = date[1] || null;

    return moment(start).isValid() && moment(end).isValid()
      ? dispatch(
          setDateRange([
            start.startOf('day').valueOf(),
            end.endOf('day').valueOf()
          ])
        )
      : dispatch(setDateRange([null, null]));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangeSelector);
