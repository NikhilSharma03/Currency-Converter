import React, { useEffect, useRef, useState } from 'react';
import './Converter.css';
import Select from './../../components/Select/Select';
import { selectItem } from './../../shared/select-data';
import Axios from 'axios';
import Modal from './../../components/Modal/Modal';

const Converter = () => {
  const [fromCurr, setFromCurr] = useState('JPY');
  const [toCurr, setToCurr] = useState('EUR');
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [resultCurr, setResultCurr] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef();

  const fromCurrencyHandler = (event) => {
    setFromCurr(event.target.value);
  };

  const toCurrencyHandler = (event) => {
    setToCurr(event.target.value);
  };

  const onConvertHandler = () => {
    if (amount <= 0) {
      alert('Please enter the amount in positive integer');
      return;
    }
    Axios.get(`https://api.exchangeratesapi.io/latest?base=${fromCurr}`)
      .then((res) => {
        let value = res.data.rates[toCurr];
        setResultCurr((value * Number.parseFloat(amount)).toFixed(2));
        openModal();
      })
      .catch((err) => {
        alert('Something went wrong.');
      });
    openModal();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setAmount(0);
    setResultCurr(0);
    setShowModal(false);
  };

  return (
    <section className="converter">
      {showModal && (
        <Modal
          from={fromCurr}
          to={toCurr}
          amount={amount}
          result={resultCurr}
          onClose={closeModal}
        />
      )}
      <form className="converter__form">
        <div className="converter__currency__container">
          <h1 className="converter__form--input--h1">From &#8595;</h1>
          <Select onChange={fromCurrencyHandler} opt={selectItem} />
          <input
            ref={inputRef}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            min={1}
            value={amount}
            placeholder="Amount"
            className="converter__form--input"
          />
        </div>
        <div className="converter__currency__container">
          <h1 className="converter__form--input--h1">To &#8595;</h1>
          <Select
            onChange={toCurrencyHandler}
            opt={[...selectItem].reverse()}
          />
        </div>
        <button
          onClick={onConvertHandler}
          type="button"
          className="converter__form--btn"
        >
          Convert
        </button>
      </form>
    </section>
  );
};

export default Converter;
