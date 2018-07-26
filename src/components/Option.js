import React from 'react';

const Option = (props) => {
  return (
    <p>
      {props.optionText}
      <button onClick={(e) => props.deleteOption(props.optionText)}>
        remove
      </button>
    </p>
  );
}

export default Option;