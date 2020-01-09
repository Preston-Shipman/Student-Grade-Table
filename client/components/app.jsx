import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import AverageGradeBadge from './average-grade-badge';
import GradeForm from './grade-component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    this.app();
  }

  app() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(grades => {
        this.setState({ grades }
        );
      })
      .catch(err => {
        alert('Error', err);
      });
  }

  averageGrades() {
    const gradeNumber = this.state.grades;
    if (gradeNumber.length === 0) {
      return null;
    } else {
      let gradeStart = 0;
      gradeNumber.forEach(grade => {
        gradeStart += grade.grade;
      });
      return Math.ceil(gradeStart / gradeNumber.length);
    }
  }

  addGrade(grades) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grades)
    })
      .then(response => {
        return response.json();
      })
      .then(grades => {
        this.setState({ grades: this.state.grades.concat(grades) });
      });
  }

  render() {
    const averageMethod = this.averageGrades();
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <Header text="Student Grade Table" />
          <AverageGradeBadge averageMethod={averageMethod} text={'Student Average'} />
        </div>
        <div className="row">
          <GradeTable grades={this.state.grades} averageMethod={averageMethod} />
          <GradeForm onSubmit={this.addGrade} />
        </div>
      </div>
    );
  }
}

export default App;
