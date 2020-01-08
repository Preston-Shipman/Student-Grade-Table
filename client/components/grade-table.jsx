import React from 'react';
import GradeRow from './gradeRow';

function GradeTable(props) {
  return (
    <table className="GradeTable table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>{props.grades.map(grade => <GradeRow key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} id={grade.id} />)}</tbody>
    </table>
  );
}

export default GradeTable;
