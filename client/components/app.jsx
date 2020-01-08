import React, { Fragment } from 'react';
import GradeTable from './grade-table';
import Header from './header';
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

  render() {
    return (
      <Fragment>
        <Header text="Student Grade Table" />
        <GradeTable grades={ this.state.grades }/>
      </Fragment>
    );
  }
}
export default App;
