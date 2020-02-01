import React, { Component } from 'react';
import final_image from "../assets/final_image.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main>
        <div className="Container">
          <div className="left-panel">
            <h1>
              Chat with us today to get direct support
              <br />
              and personal guide for postpartum
            </h1>
            <button type="button" className="btn-how-it-works">
              <h2>How it works</h2>
            </button>
          </div>
          <div className="right-panel">
            <img src={final_image} alt=""></img>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;