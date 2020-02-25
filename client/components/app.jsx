import React from 'react';
import TodoTable from './todo-table';
import Header from './header';
import TodoForm from './todo-form';
import M from 'materialize-css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.app();
  }

  app() {
    fetch('/api/todos')
      .then(response => {
        return response.json();
      })
      .then(todos => {
        this.setState({ todos });
      })
      .catch(err => {
        alert('Error', err);
      });
  }

  addTodo(todos) {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos)
    })
      .then(response => {
        return response.json();
      })
      .then(todos => {
        this.setState({ todos: this.state.todos.concat(todos) });
      });
  }

  deleteGrade(todos) {
    fetch('api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todos)
    })
      .then(response => {
        return response.json();
      })
      .then(todos => {
        this.setState({ todos: this.state.todos });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <TodoTable todos={this.state.todos} />
        <TodoForm todos={this.state.todos} onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
