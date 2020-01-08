import React from 'react';

function AverageGradeBadge(props) {
  return (
    <div className={'container'}>
      <div className={'row'}>
        <h3>
          {props.text}
          <span className={'badge badge-secondary'}> {props.averageMethod} </span>
        </h3>
      </div>
    </div>
  );
}

export default AverageGradeBadge;
