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
      <Menu style={{margin: '20px 0;'}} />
      <div className="content">
        <Routes />
      </div>
      <Footer />
      <CounterYandex />
    </div>
  </Router>
)
