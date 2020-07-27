import React, { Component, Fragment } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {LoginScreen, HomeScreen} from './screens/index'

 class App extends Component{
  render(){
    return(
      <Fragment>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap" rel="stylesheet"></link>
        <Switch>
          <Route path='/' component={LoginScreen} exact/>
          <Route path='/home' component={HomeScreen}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App