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
        <h1 className="page__header">Наша Эра:</h1>
        <h3 className="header header_small">события, люди, явления</h3>

        <div className="namedni">
          <Namedni />
        </div>

      </div>
    )
  }
}

export default Memories
