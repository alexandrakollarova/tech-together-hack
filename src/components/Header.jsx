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
            <h2>
              Momba
            </h2>
          </li>
        </ul>

        <ul>
          <li>
            <p>Resources</p>
          </li>
          <li>
            <p>
              Provider Directory
            </p>
          </li>
          <li>
            <p>
              News & Blog
            </p>
          </li>
          <li>
            <p>
              Log in
            </p>
          </li>
          <li className='btn-sign-up' style={{ marginTop: '20px' }}>
            <p>
              Sign up free
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;