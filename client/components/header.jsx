import React, { Component } from 'react';
import M from 'materialize-css';
class Header extends React.Component {

  componentDidMount() {
    M.navwrapper.init(this.navwrapper);
  }

  render() {
    return (
      <div
        ref={navwrapper => {
          this.navwrapper = navwrapper;
        }}
        className="navwrapper"
      >
        <div className="navwrapper">
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }

}
export default Header;
