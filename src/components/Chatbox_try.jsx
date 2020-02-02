import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const Review = (props) => (
  <div>
    {props.res}
  </div>
);


class ChatBox_try extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      active: false,
      steps: [
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
        },
      ]
    };
  }

  sendMessage = (msg) => {
    const lastStepId = parseInt(this.state.steps[this.state.steps.length - 1].id)

    const tempSteps = this.state.steps
    tempSteps[this.state.steps.length - 1].trigger = (lastStepId + 1).toString()

    const newStep = {
      id: (lastStepId + 1).toString(),
      trigger: (lastStepId + 2).toString()
    }

    //this.setState({ steps: [...this.state.steps, newStep] });

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
        newStep.message = data.data
        //this.setState({ steps: [...this.state.steps, newStep] });
        console.log(this.state)
        const userStep = {
          id: (lastStepId + 2).toString(),
          user: true,
          validator: msg => {
            this.sendMessage(msg)
            return true
          }
        }
        tempSteps.push(newStep)
        tempSteps.push(userStep)

        this.setState({ steps: tempSteps });
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

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={this.state.steps}/*{[
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
              component: this.state.response && <Review res={this.state.response} />
              //user: true
            }
          ]} */

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
