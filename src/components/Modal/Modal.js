import React from 'react';
import './Modal.css';
import { selectItem } from './../../shared/select-data';

const Modal = (props) => (
  <section className="modal__backdrop">
    <div className="modal__container">
      <div className="modal__text--container">
        <h1 className="modal__text--container__text">
          {props.from}{' '}
          {selectItem.find((item) => item.title === props.from).image}
        </h1>
        <h2 className="modal__text--container__text">➤</h2>
        <h1 className="modal__text--container__text">
          {selectItem.find((item) => item.title === props.to).image} {props.to}
        </h1>
      </div>
      <h2 className="modal__text modal__text--amount ">
        Amount : {props.amount} {props.from}
      </h2>
      <h2 className="modal__text modal__text--result">
        Result : {props.result} {props.to}
      </h2>
      <button onClick={props.onClose} className="modal__btn">
        Close
      </button>
    </div>
  </section>
);

export default Modal;
