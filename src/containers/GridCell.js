import { connect } from 'react-redux';
import MonthGridCell from '../components/MonthGridCell';
import { showModal } from '../actions';
import { getDummyReminder } from '../utils/reminder';

const mapStateToProps = state => ({
  reminders: state.reminders,
});

const mapDispatchToProps = dispatch => ({
  onClickAddReminderBtn: dt => dispatch(showModal({ ...getDummyReminder(), dt })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthGridCell);
