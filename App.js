/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import { StackNavigator } from 'react-navigation';
import Login from './appPages/Login';
import Dashboard from './appPages/Dashboard';




export default class App extends Component<{}> {
state = {
    isLoggedIn: true //true //
  } 
  render() 
  {
  if(this.state.isLoggedIn) 
  {
   return <Dashboard/>
  }
  else 
  {
   return <Login/>
  }
  }
}
