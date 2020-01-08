import React from 'react';
class GradeRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

export default GradeRow;
