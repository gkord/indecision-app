import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
  //we us !! to convert to false
  isOpen = {!!props.selectedOption}
  contenLabel="Selected Option"
  ariaHideApp={false}
  onRequestClose={props.clearSelectedOption}
  closeTimeoutMS={200}
  className="modal"
  >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.clearSelectedOption}>Close</button>
  </Modal>
);

export default OptionModal;
