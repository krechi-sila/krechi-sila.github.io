import React, { Component } from 'react'
import {
  getSiteProps,
  getRouteProps
} from 'react-static'

import { Namedni } from '../../containers/index'

class Memories extends Component {

  render () {

    return (
      <div className="page page_type_memories">
        <h1 className="page__header">История</h1>
        <Namedni />
      </div>
    )
  }
}

export default Memories
