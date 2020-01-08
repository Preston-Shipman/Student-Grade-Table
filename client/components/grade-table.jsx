import React from 'react';
import GradeRow from './gradeRow';

function GradeTable(props) {
  return (<table className="GradeTable">{props.grades.map(grade => <GradeRow key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} id={grade.id} />)}</table>);
}

export default GradeTable;
