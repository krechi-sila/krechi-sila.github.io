import React from 'react'
import {
  Router,
  Link
} from 'react-static'
import Routes from 'react-static-routes'

import {
  Menu,
  Footer,
  CounterYandex
} from './components'

import './app.css'

export default () => (
  <Router>
    <div className="app">
      <div className="app__menu"><Menu /></div>
      <div className="app__content">
        <Routes />
      </div>
      <div className="app__footer"><Footer /></div>
      <CounterYandex />
    </div>
  </Router>
)
