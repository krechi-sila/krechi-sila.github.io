import React from 'react'

const EventItem = ({event}) => {

  return (
    <div className="event-item">
      <div className="event-item__title">
        {event.title}
      </div>
      <div className="event-item__text">
        {event.text}
      </div>
      <div className="photos">
        {event.photos && event.photos.map(photo => <img key={photo} src={`/photos/memories/${photo}`} />)}
      </div>
    </div>
  )
}

export default EventItem
