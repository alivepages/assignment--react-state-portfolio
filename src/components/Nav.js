import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Menu</h3>
        <hr/>
        <Link to="/">Home</Link>
        <Link to="/cv">Technologies</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    );
  }
}

export default Nav;
