import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Funnels from "./Funnels";
import Services from "./Services";
import ChatBox_try from './ChatBox_try';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleChatClick = (e) => {
    e.preventDefault()

    this.setState({ active: true });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.active && <ChatBox_try />}

        <Main />
        <Funnels handleClick={this.handleChatClick} />
        <Services />
      </div>
    );
  }
}
