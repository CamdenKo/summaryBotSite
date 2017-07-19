import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import store from '../store'
import { Provider } from 'react-redux'
import Navbar from './navbar.jsx'

export default class Root extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <main>
            <Navbar />
            <Route path = '/' component = {Navbar}/>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}
