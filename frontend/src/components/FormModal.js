import FormContent from './FormContent';
import React, { Component } from 'react';
import './modal.css';
class FormModal extends React.Component {
  render() {
    const formContent = <FormContent setShowModal={this.props.setShowModal} titleText={this.props.titleText} setNotes={this.props.setNotes} notes={this.props.notes} />;
    const modal = this.props.showModal ? <div className="modal-main">{formContent}</div> : null;
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default FormModal;