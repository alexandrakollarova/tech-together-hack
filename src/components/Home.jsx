import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Funnels from "./Funnels";
import Services from "./Services";
import Chatbox_try from "./Chatbox_try";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Funnels />
        <Services />
        <Chatbox_try />
      </div>
    );
  }
}
