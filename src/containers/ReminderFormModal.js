import { connect } from 'react-redux';
import ReminderModal from '../components/ReminderFormModal';
import {addReminder, deleteReminder, editReminder, hideModal} from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickSaveBtn: (reminder) => {
    if (reminder.id) {
      dispatch(editReminder(reminder));
    } else {
      dispatch(addReminder(reminder));
    }

    dispatch(hideModal());
  },
  onClickCancelBtn: () => dispatch(hideModal()),
  onClickDeleteBtn: () => dispatch(deleteReminder(ownProps.reminder)) && dispatch(hideModal()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ReminderModal);
