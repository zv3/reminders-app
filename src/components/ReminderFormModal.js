import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { REMINDER_PROP_TYPES, COLORS } from '../constants/consts';
import { getDummyReminder } from '../utils/reminder';
import DateInputSelector from './DateInputSelector';

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled }) => ({
    ...styles,
    color: data.value,
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.value) }),
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.titleInputRef = React.createRef();

    this.state = {
      reminder: {
        ...props.reminder,
        dt: new Date(props.reminder.dt),
      },
      validation: {
        wasValidated: false,
        hasErrors: false,
        fields: {
          title: true,
        },
      },
    };
  }

  componentDidMount() {
    this.titleInputRef.current.focus(); // auto-focus the title input.
  }

  getModalTitle() {
    const { reminder } = this.state;

    return reminder && reminder.id ? 'Edit Reminder' : 'Add Reminder';
  }

  onClickSaveBtn = () => {
    const { onClickSaveBtn } = this.props;
    const { reminder } = this.state;

    if (this.validateFields()) {
      onClickSaveBtn(reminder);
    }
  };

  onChangeTitleInput = (event) => {
    const { reminder } = this.state;

    this.setState({ reminder: { ...reminder, title: event.target.value } });
  };

  onChangeDateInput = (dt) => {
    const { reminder } = this.state;

    this.setState({ reminder: { ...reminder, dt } });
  };

  onChangeColorInput = (color) => {
    const { reminder } = this.state;

    this.setState({ reminder: { ...reminder, color: color.value } });
  };

  validateFields() {
    const { reminder, validation } = this.state;
    const fields = { ...validation.fields };
    let hasErrors = false;

    if (!reminder.title.trim().length) {
      fields.title = false;
      hasErrors = true;
    }

    this.setState({ validation: { fields, wasValidated: true } });

    return !hasErrors;
  }

  render() {
    const { onClickCancelBtn, onClickDeleteBtn } = this.props;
    const { reminder, validation } = this.state;
    const currentColorValue = COLORS.find(c => c.value === reminder.color);

    return (
      <div>
        <div className="modal-backdrop fade show" />
        <div role="dialog" className="modal fade show d-block">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{ this.getModalTitle() }</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClickCancelBtn}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className={`needs-validation ${validation.wasValidated ? 'was-validated' : ''}`}>
                  <div className="row">
                    <div className="col-10 m-auto">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Title</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Add title..."
                            id="title"
                            value={reminder.title}
                            onChange={this.onChangeTitleInput}
                            maxLength="30"
                            required
                            ref={this.titleInputRef}
                          />
                          { !validation.fields.title ? <div className="invalid-feedback">Please add a title for this entry.</div> : '' }
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Date / Time</label>
                        <div className="col-sm-9">
                          <DateInputSelector
                            onChange={this.onChangeDateInput}
                            selectedDt={reminder.dt}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Color</label>
                        <div className="col-sm-9">
                          <Select
                            options={COLORS}
                            styles={colourStyles}
                            onChange={this.onChangeColorInput}
                            value={currentColorValue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary font-weight-bold" onClick={onClickCancelBtn}>Cancel</button>
                { reminder && reminder.id
                  ? <button type="button" className="btn btn-danger font-weight-bold" onClick={onClickDeleteBtn}>Delete</button>
                  : ''
                }
                <button type="button" className="btn btn-primary font-weight-bold" onClick={this.onClickSaveBtn}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  reminder: REMINDER_PROP_TYPES.reminder,
  onClickDeleteBtn: PropTypes.func.isRequired,
  onClickSaveBtn: PropTypes.func.isRequired,
  onClickCancelBtn: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  reminder: getDummyReminder(),
};

export default Modal;
