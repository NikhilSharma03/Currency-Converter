import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <select
      id="select"
      onChange={props.onChange}
      className="converter__container--select"
    >
      {props.opt.map((item) => {
        return (
          <option
            value={item.title}
            key={item.title}
            className="converter__container--select__option"
            placeholder="Choose Currency"
          >
            {item.image} {item.title}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
