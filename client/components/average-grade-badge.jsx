import React from 'react';

function AverageGradeBadge(props) {
  return (
    <h3 className={'w-50'}>
      {props.text}
      <span className={'badge badge-secondary'}> {props.averageMethod} </span>
    </h3>
  );
}

export default AverageGradeBadge;
