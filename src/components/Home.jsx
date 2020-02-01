import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Funnels from './Funnels';
import Services from './Services';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Funnels />
        <Services />
      </div>
    );
  }
}

