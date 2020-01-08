import React from 'react';
class GradeRow extends React.Component {
  render() {
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope={'col'} className={'text-center'}>#</th>
            <th scope={'col'} className={'text-center'}>First</th>
            <th scope={'col'} className={'text-center'}>Last</th>
            <th scope={'col'} className={'text-center'}>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={'text-center'}>{this.props.id}</td>
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
