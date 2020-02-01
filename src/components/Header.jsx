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
          <li>
            <h2 style={{ color: 'black' }}>
              Momba <span>.</span>
            </h2>
          </li>
        </ul>

        <ul>
          <li>
            <h2>Resources</h2>
          </li>
          <li>
            <h2>
              Provider Directory
            </h2>
          </li>
          <li>
            <h2>
              News & Blog
            </h2>
          </li>
          <li>
            <h2>
              Log in
            </h2>
          </li>
          <li className='btn-sign-up' style={{ marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>
              Sign up free
            </h2>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;