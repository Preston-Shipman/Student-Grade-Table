import React from 'react';
class GradeRow extends React.Component {
  render() {
    return (
      <table className="table table-dark">
        <thead>
          <th scope={'col'} className={'text-center'}>Name</th>
          <th scope={'col'} className={'text-center'}>Course</th>
          <th scope={'col'} className={'text-center'}>Grade</th>
        </thead>
        <tbody>
          <tr>
            <td className={'text-center'}>{this.props.name}</td>
            <td className={'text-center'}>{this.props.course}</td>
            <td className={'text-center'}>{this.props.grade}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default GradeRow;
