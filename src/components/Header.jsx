import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <nav className='main-nav'>
        <ul>
          <li className='logo'>Momba</li>
          <li>Resources</li>
          <li className='main-nav-li'>Provider Directory</li>
          <li>News & Blog</li>
          <li>Log in</li>
          <li>Sign up free</li>
        </ul>
      </nav>
    );
  }
}

export default Header;