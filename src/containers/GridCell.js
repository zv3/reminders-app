import { connect } from 'react-redux';
import MonthGridCell from '../components/MonthGridCell';
import { showModal } from '../actions';
import { DEFAULT_COLOR_VALUE } from '../constants/consts';

const mapStateToProps = state => ({
  reminders: state.reminders,
});

const mapDispatchToProps = dispatch => ({
  onClickAddReminderBtn: dt => dispatch(showModal({ dt, title: '', color: DEFAULT_COLOR_VALUE })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonthGridCell);
