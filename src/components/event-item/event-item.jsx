import React from 'react'

import './event-item.css'

const EventItem = ({event}) => {

  return (
    <div className="event-item">
      <div className="event-item__title">
        {event.title}
      </div>

      <div className="event-item__content">
        <div className="event-item__text">
          {event.text}
        </div>
        <div className="event-item__photos">
          {event.photos && event.photos.map(photo => <img key={photo} className="event-photo"
            src={`/photos/memories/${photo}`} />)}
        </div>
      </div>
    </div>
  )
}

export default EventItem
