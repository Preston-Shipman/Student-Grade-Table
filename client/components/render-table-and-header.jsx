import React from 'react';

class RenderTable extends React.Component {
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
            </table>
          </div>
          <div className={'col'}>
          </div>
        </div>
      </div>
    );
  }
}
export default RenderTable;
