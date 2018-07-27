import React from 'react';

const Option = (props) => (
  <p>
    {props.optionText}
    <button onClick={(e) => props.deleteOption(props.optionText)} className="button button_link">
      remove
    </button>
  </p>
);

export default Option;