import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

class Review extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      res: '',
    };
  }

  componentWillMount() {
    // const { steps } = this.props;
    // const { res } = steps;

    // this.setState({ res });
  }

  render() {
    console.log(this.props)
    const { res } = this.props;
    //console.log(this.props)
    return (
      <div>
        {res}
      </div>
    );
  }
}

class ChatBox_try extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      response: '',
      active: false
    };
  }

  sendMessage = (msg) => {

    this.setState({ active: true });

    fetch(`http://127.0.0.1:5000/bot?message=${msg}`, {
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) {
          return res.json()
            .then((error) => {
              throw error;
            });
        }
        return res.json()
      })
      .then((data) => {
        this.setState({ response: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const theme = {
      background: 'white',
      headerBgColor: '#ff5f5f',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#ff8665',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
    console.log(this.state.active)
    return (
      <ThemeProvider theme={theme}>
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
              },
              trigger: '3',
            },
            {
              id: "3",
              component: <Review res={this.state.active ? this.state.response : 'got nothing'} />
              //user: true
            }
          ]}

          style={{
            position: 'absolute',
            left: '1000px',
            top: '100px'
          }}
        />
      </ThemeProvider>
    );
  }
}

export default ChatBox_try;
