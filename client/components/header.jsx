import React from 'react';
import M from 'materialize-css';
class Header extends React.Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div
        // ref={navwrapper => {
        //   this.navwrapper = navwrapper;
        // }}
        // className="nav-wrapper"
      >
        <div className={M.navwrapper}>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }

}
export default Header;
