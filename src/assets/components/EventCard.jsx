import React from 'react'
import { Link } from 'react-router-dom'
import locationdot from '/src/assets/images/location-dot.svg'


const EventCard = ({event}) => {
  return (
    <Link to={`/events/${event.id}`}>
        <div className="event-card">
          <div className="event-card-image">{event.image}</div>
          <div className="event-card-date">{event.eventDate}</div>
          <div className="event-card-title"><p>{event.title}</p></div>
          <div className="event-card-location"><img src={locationdot} /> {event.location}</div>
        </div>
      </Link>
  )
}

export default EventCard