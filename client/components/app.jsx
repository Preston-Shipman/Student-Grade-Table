import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import AverageGradeBadge from './average-grade-badge';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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

  render() {
    const averageMethod = this.averageGrades();
    return (
      <div className="container">
        <div className="row">
          <Header className="w-50 p-3" text="Student Grade Table" />
          <AverageGradeBadge className="w-50 p-3" averageMethod={averageMethod} text={'Student Average'} />
          <GradeTable grades={this.state.grades} averageMethod={averageMethod} />
        </div>
      </div>
    );
  }

}

export default App;
