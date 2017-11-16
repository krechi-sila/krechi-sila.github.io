import React from 'react'

import { EventItem } from '../../components'

const EventsList = (props) => {
  return (
    <ul className="event-list">
      <li className="event-list__item">
        {props.events.map(event => <EventItem event={event} />)}
      </li>
    </ul>
  )
}

EventsList.defaultProps = {
  events: [
    {
      title: 'title'
    }
  ]
}

export default EventsList
