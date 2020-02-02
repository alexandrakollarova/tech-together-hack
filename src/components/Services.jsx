import React, { Component } from 'react';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className='services-headline'>
          <h2>Healthy
            <br />
            Mindful
            <br />
            Life
          </h2>
        </div>

        <div className='services-list'>
          <ul>
            <li>Hundreds of meditation sessions</li>
            <li>Personal guideline for your wellness</li>
            <li>Support for your spouse and family members</li>
            <li>Provideers that tailor to your own words</li>
            <li>Unique daily exercise to enhance mental health</li>
          </ul>
          <button type='button' className='btn-explore'>
            <h2>
              Explore our services
            </h2>
          </button>
        </div>
      </div>
    );
  }
}

export default Services;