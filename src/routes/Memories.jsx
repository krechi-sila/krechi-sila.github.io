import React, { Component } from 'react'
import {
  getSiteProps,
  getRouteProps
} from 'react-static'

class Memories extends Component {

  render () {

    return (
      <div className="memories-route page">
        <h1 className="header">Наша Эра:</h1>
        <h3 className="header header_small">события, люди, явления</h3>
      </div>
    )
  }
}

export default Memories
