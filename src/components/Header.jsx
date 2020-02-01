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
            <h3>
              Momba
            </h3>
          </li>
        </ul>

        <ul>
          <li>
            <h3>Resources</h3>
          </li>
          <li>
            <h3>
              Provider Directory
            </h3>
          </li>
          <li>
            <h3>
              News & Blog
            </h3>
          </li>
          <li>
            <h3>
              Log in
            </h3>
          </li>
          <li>
            <h3>
              Sign up free
            </h3>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;