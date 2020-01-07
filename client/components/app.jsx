import React from 'react';
import Rendy from './render-table-and-header';
import { render } from 'react-dom';
// import { render } from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return <Rendy />;
  }

  componentDidMount() {
    this.app();
  }

  app() {
    fetch('/api/grades')
      // method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json'
      // }
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
        return response.json();
      })
      .then(grades => {
        this.setState({ grades }, // eslint-disable-next-line no-console
          console.log(grades));
        this.setState({ grades: this.state.grades.concat(grades) });
        // eslint-disable-next-line no-console
        console.log(this.state.grades);
      });
  }
}

// componentWillUnmount(App);
export default App;
