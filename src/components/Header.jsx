import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <nav className='main-nav'>
        <ul className='logo'>
          <li>Momba</li>
        </ul>

        <ul>
          <li>Resources</li>
          <li>Provider Directory</li>
          <li>News & Blog</li>
          <li>Log in</li>
          <li>Sign up free</li>
        </ul>
      </nav>
    );
  }
}

export default Header;