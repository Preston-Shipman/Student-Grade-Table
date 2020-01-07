import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';

function GradeTable(props) {
  return (<table className="GradeTable">{props.text}</table>);
}

// class GradeTable extends React.Component {
//   render() {
//     return (<div className="table">
//       <div className="row">
//         <div className="col-sm">
//           One of three columns
//         </div>
//         <div className="col-sm">
//           One of three columns
//         </div>
//         <div className="col-sm">
//           One of three columns
//         </div>
//       </div>
//     </div>);
//   }
// }
export default GradeTable;
