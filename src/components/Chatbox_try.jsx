import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";

class ChatBox_try extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      response: ''
    };
  }

  sendMessage = (msg) => {
    fetch(`http://127.0.0.1:5000/api?msg=${msg}`, {
      method: 'POST',
      body: JSON.stringify({ msg }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
      })
      .then((data) => {
        this.setState({ resonse: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "How are you today?",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            validator: msg => {
              this.sendMessage(msg)

              return true
            }
            //trigger: '1',
          },
          // {
          //   id: "2",
          //   message: "That's awesome!",
          // }
        ]}

        style={{
          position: 'absolute',
          left: '1000px',
          top: '100px'
        }}
      />
    );
  }
}

export default ChatBox_try;
