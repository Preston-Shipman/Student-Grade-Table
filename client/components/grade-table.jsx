import React from 'react';
import GradeRow from './gradeRow';

function GradeTable(props) {
  return (
    <div className="col-sm-9 col-12">
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
    </div>
  );
}

export default GradeTable;
