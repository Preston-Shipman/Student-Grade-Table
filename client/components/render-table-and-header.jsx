import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import { render } from 'react-dom';

class Rendy extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col'}>
            <table className={'table table-dark'}>
              <thead>
                <tr>
                  <th scope={'col'} className={'text-center'}>#</th>
                  <th scope={'col'} className={'text-center'}>First</th>
                  <th scope={'col'} className={'text-center'}>Last</th>
                  <th scope={'col'} className={'text-center'}>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
            <Header text="Student Grade Table" />
            <GradeTable />
            {/* grades={this.state.grades}  */}
          </div>
          <div className={'col'}>
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Rendy;
