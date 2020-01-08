import React from 'react';

function header(props) {
  return (
    <div className={'header w-50'}>
      <h3>{props.text}</h3>
    </div>
  );
}
export default header;
