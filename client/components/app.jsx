import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    const header = <header>Student Grade Table</header>;
    const gradeTable = <tr></tr>;
    return null;
  }

  componentDidMount(App) {
    fetch('/api/grades', {
      method: 'GET'
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    })
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
        return response.json();
      })
      .then(state => {
        this.setState(this.grades, // eslint-disable-next-line no-console
          console.log(this.grades));
      });
  }
}
componenetDidUpdate() {

}
//componentWillUnmount(App);
export default App;
