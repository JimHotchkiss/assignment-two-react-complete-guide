import React from 'react';

const ValidationComponent = (props) => {
  // create conditional w/ respect to legth of text
  let validationMessage = 'Text long enough';

  if (props.textLength <= 5) {
    validationMessage = 'Text too short';
  }
 
  
  return (
    <div>Text Length: {props.textLength}
      <div>Message: {validationMessage}</div>
    </div>
  )
}

export default ValidationComponent;