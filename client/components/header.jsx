import React from 'react';
import M from 'materialize-css';
class Header extends React.Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <nav
        // ref={navwrapper => {
        //   this.navwrapper = navwrapper;
        // }}
        // className="nav-wrapper"
      >
        <div className="nav-wrapper text-center">
          <h1 className="center-align">My Tasks</h1>
          <h3>{this.props.text}</h3>
        </div>
      </nav>
    );
  }

}
export default Header;
