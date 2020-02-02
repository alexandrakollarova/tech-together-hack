import React from "react";
import ChatBot from "react-simple-chatbot";

class ChatBox_try extends React.Component {
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
      />
    );
  }
}

export default ChatBox_try;
