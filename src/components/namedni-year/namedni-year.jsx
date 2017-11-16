import React from 'react'

import { EventsList } from '../../components'

const NamedniYear = props => {
  return (
    <div className="namedni-year">
      <h1 className="header namedni-year__header">{props.year}</h1>

      <EventsList events={props.yearData.events} />
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

