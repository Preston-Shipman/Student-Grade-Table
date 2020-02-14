import React from 'react';

function AverageGradeBadge(props) {
  return (
    <div>
      <h3>
        {props.text}
        <span className={'badge badge-secondary'}> {props.averageMethod} </span>
      </h3>
    </div>
  );
}

export default AverageGradeBadge;
