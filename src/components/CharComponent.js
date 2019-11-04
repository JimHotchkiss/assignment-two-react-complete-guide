import React from 'react';

const CharComponent = (props) => {

  const style = {
    display: 'inline-block',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    padding: '16px',  
    margin: '16px', 
    border: '1px solid black'
  }
   
  return (
    <div
      style={style}
      onClick={props.click}
      >
        <p>{props.character}</p>
    </div>
  )

  
}
export default CharComponent;