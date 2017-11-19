import React from 'react'

import { EventsList } from '../../components'
import './namedni-year.css'

const NamedniYear = props => {
  return (
    <div className="namedni-year">
      <h1 className="namedni-year__header">{props.year}</h1>

      <div className="namedni-year__events">
        <EventsList events={props.yearData.events} />
      </div>
    </div>
  )
}

NamedniYear.defaultProps = {
  yearData: {
    events: [{
      date: 'date',
      title: 'title',
      text: 'text',
      photos: []
    }],
    year: '20!8'
  }
}

export default NamedniYear

