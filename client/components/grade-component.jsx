import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // GradeForm() {
  //   < form >
  //     <div className="form-group fa fa-mb-3 fas fa-user">
  //       <label htmlFor="exampleInputEmail1">Student Name</label>
  //       <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student's Name" />
  //     </div>
  //     <div className="form-group fa fa-mb-3">
  //       <label htmlFor="exampleInputPassword1">Grade</label>
  //       <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Student's Grade" />
  //     </div>
  //     <div className="form-group fa fa-mb-3">
  //       <label htmlFor="exampleInputPassword1">Course</label>
  //       <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Student's Course" />
  //     </div>
  //     <div><button type="submit" className="btn btn-primary">Add</button></div>
  //     <div><button type="cancel" className="btn btn-primary">Cancel</button></div>
  //   </form >;
  // }
  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCourse(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleChangeGrade(event) {
    const gradeStrToNum = parseInt(event.target.value);
    this.setState({ grade: gradeStrToNum });
  }

  handleSubmit(event) {
    event.preventDefault();
    const grades = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(grades);
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      <div className="col-sm-3 col-12">
        < form onSubmit={this.handleSubmit}>
          <div className="form-group fas fa-user" onChange={this.handleChangeName} value={this.state.name}>
            <label htmlFor="exampleInputEmail1">Student Name</label>
            <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student's Name" />
          </div>
          <div className="form-group" onChange={this.handleChangeGrade} value={this.state.grade}>
            <label htmlFor="exampleInputPassword1">Grade</label>
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Student's Grade" />
          </div>
          <div className="form-group" onChange={this.handleChangeCourse} value={this.state.course}>
            <label htmlFor="exampleInputPassword1">Course</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Student's Course" />
          </div>
          <div className="d-flex">
            <div><button type="submit" className="btn btn-primary m-1">Add</button></div>
            <div><button type="reset" className="btn btn-primary m-1" onCancel={this.handleCancel}>Cancel</button></div>
          </div>
        </form >
      </div>
      //   </div>
      // </div>
    );
  }
}

export default GradeForm;
