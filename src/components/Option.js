import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button onClick={(e) => props.deleteOption(props.optionText)} className="button button_link">
      remove
    </button>
  </div>
);

export default Option;