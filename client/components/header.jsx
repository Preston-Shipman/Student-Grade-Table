import React from 'react';

function header(props) {
  return (
    <div className={'header'}>
      <h3>{props.text}</h3>
    </div>
  );
}
export default header;
