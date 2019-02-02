import { connect } from 'react-redux';
import Reminder from '../components/Reminder';
import { showModal } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickReminderBtn: () => dispatch(showModal(ownProps.reminder)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Reminder);
