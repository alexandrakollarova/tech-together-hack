import React from "react";
import ChatBot from "react-simple-chatbot";

class ChatBox_try extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
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
        // const newCollectionList = this.state.collectionList.concat([place]);
        // this.setState({ collectionList: newCollectionList });
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
            id: "0",
            message: "Welcome to react chatbot!",
            trigger: "1"
          },
          {
            id: "1",
            message: "Bye!",
            end: true
          }
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
