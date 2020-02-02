import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './style.css';

export default class AppWrapper extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    )
  }
}