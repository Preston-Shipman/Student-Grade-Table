import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      details: '',
      isCompleted: false
    };
    this.handleChangeTaskName = this.handleChangeTaskName.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
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
    return (
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
          {/* <form onSubmit={this.handleSubmit}>
            <div
              className="form-group fas fa-user"
              onChange={this.handleTaskName}
              value={this.state.TaskName}
            >
              <label htmlFor="exampleInputEmail1">Task Name</label>
              <input
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Student's Name"
              />
            </div>
            <div
              className="form-group"
              onChange={this.handleChangeGrade}
              value={this.state.grade}
            >
              <label htmlFor="exampleInputPassword1">Grade</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Student's Grade"
              />
            </div>
            <div
              className="form-group"
              onChange={this.handleChangeCourse}
              value={this.state.course}
            >
              <label htmlFor="exampleInputPassword1">Course</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Student's Course"
              />
            </div>
            <div className="d-flex">
              <div>
                <button type="submit" className="btn btn-primary m-1">
                  Add
                </button>
              </div>
              <div>
                <button
                  type="reset"
                  className="btn btn-primary m-1"
                  onCancel={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    );
  }
}

export default TodoForm;
