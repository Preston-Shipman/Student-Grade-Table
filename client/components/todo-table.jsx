import React from 'react';
import TodoRow from './todo-Row';

function TodoTable(props) {
  return (
    <div className="col-sm-9 col-12">
      <table className="TodoTatodosble table table-dark">
        <thead>
          <tr>
            <th>Task</th>
            <th>Details</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{props.todos.map(todos => <TodoRow key={todos.id} taskName={todos.taskName} details={todos.details}/>)}</tbody>
      </table>
    </div>
  );
}

export default TodoTable;
