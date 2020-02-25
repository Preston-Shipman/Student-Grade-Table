import React from 'react';
import M from 'materialize-css';
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      details: '',
      isCompleted: false,
      todosExist: false
    };
    this.handleChangeTaskName = this.handleChangeTaskName.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChangeTaskName(event) {
    this.setState({
      taskName: event.target.value
    });
  }

  handleChangeDetails(event) {
    this.setState({
      details: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = {
      taskName: this.state.name,
      details: this.state.details
    };
    this.props.onSubmit(todos);
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      taskName: '',
      details: ''
    });
  }

  handleStatusChange(event) {
    this.setState({
      isCompleted: true
    });
  }

  render() {
    const todosExist = !this.props.todos.length;
    return (
      <div>
        {todosExist ? (
          <div id="modal1" className="modal">
            <div className="modal-content">
              <div className="row">
                <div className="col-sm-3 col-12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        placeholder="Task Name"
                        id="task_name"
                        type="text"
                        className="validate"
                      ></input>
                      <label htmlFor="task_name">Task Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        placeholder="Details"
                        id="details"
                        type="text"
                        className="validate"
                      ></input>
                      <label htmlFor="details">Details</label>
                    </div>
                    <div className="row">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                      >
                        Submit
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
              </div>
            </div>
          </div>
        ) : (
          // eslint-disable-next-line no-console
          console.log('nothing')
        )}
      </div>
    );
  }
}

export default TodoForm;
