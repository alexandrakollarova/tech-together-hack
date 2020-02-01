import React, { Component } from 'react';

class Funnels extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='funnels'>
        <h1>Did you know?</h1>

        <ul>
          <li>
            <h2>1/7</h2>
            <p>moms suffer from
            <br />
              postpartum depression
            </p>
          </li>

          <li>
            <h2>600,000</h2>
            <p>postpartum depression
              <br />
              diagnosis each year
            </p>
          </li>

          <li>
            <h2>80%</h2>
            <p>of women experience the
            <br />
              'baby blues' after giving
            <br />
              birth
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Funnels;