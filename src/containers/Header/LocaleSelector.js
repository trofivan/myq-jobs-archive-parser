import { connect } from 'react-redux';
import { setLocale } from '../../actions';
import LocaleSelector from '../../components/Header/LocaleSelector';

const mapStateToProps = state => ({
  locale: state.locale
});

const mapDispatchToProps = dispatch => ({
  handleChangeLocale: locale => dispatch(setLocale(locale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSelector);
