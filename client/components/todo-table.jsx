import React from 'react';
import TodoRow from './todo-Row';

function TodoTable(props) {
  return (
    <nav>
      <div className="col-sm-9 col-12 nav-wrapper">
        <ul id="nav-mobile" className=" hide-on-med-and-down">
          <li>
            <a>Task</a>
          </li>
          <li>
            <a>Details</a>
          </li>
          <li>
            <a>Done</a>
          </li>
        </ul>
        <div>
          {props.todos.map(todos => (
            <TodoRow
              key={todos.id}
              taskName={todos.taskName}
              details={todos.details}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TodoTable;
