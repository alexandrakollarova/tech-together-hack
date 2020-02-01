import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main>
        <h1>Chat with us today to get direct support
        <br />
          and personal guide for postpartum
        </h1>

        <button type='button' className='btn-how-it-works'>
          <h2>
            How it works
          </h2>
        </button>
      </main>
    );
  }
}

export default Main;