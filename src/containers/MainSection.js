import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import * as Actions from '../actions';

const mapStateToProps = state => ({
  reminders: state.reminders,
  currentMonth: state.currentMonth,
  modalVisibility: state.modalVisibility,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);
