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
      gradeNumber.map(grade => {
        gradeStart += grade.grade;
      });
      return Math.ceil(gradeStart / gradeNumber.length);
    }

  }

  render() {
    const averageMethod = this.averageGrades();
    // eslint-disable-next-line no-console
    console.log(averageMethod);
    return (
      <div className="container">
        <Header text="Student Grade Table" />
        <AverageGradeBadge averageMethod={averageMethod} text={'Student Average'}/>
        <GradeTable grades={ this.state.grades } averageMethod={averageMethod}/>
      </div>
    );
  }
}

// averageGrades return value as a prop inside header elemtn in renders return.

export default App;
