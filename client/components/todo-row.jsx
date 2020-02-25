import React from 'react';
import M from 'materialize-css';
class TodoRow extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Details</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.taskName}</td>
            <td>{this.props.details}</td>
            <td>{this.props.iscompleted}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TodoRow;
