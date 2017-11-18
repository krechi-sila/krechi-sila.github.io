import React from 'react'

import { EventItem } from '../../components'

import './event-list.css'

const EventsList = (props) => {
  return (
    <ul className="event-list">
      {props.events.map((event, index) => {
        return (
          <li
            key={index}
            className="event-list__item"
          >
            <EventItem event={event}
            />
          </li>
        )
      })}
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
