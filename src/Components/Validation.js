import React from "react";

const validation = props => {
  return (
    <div>
      { props.inputLength > 5 ?
      <p> Text too Long</p> :
      <p> Text too Short</p>
      }
    </div>
  );
};

export default validation;
