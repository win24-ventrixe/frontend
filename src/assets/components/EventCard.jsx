import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({event}) => {
  return (
    <Link to={`/events/${event.id}`}>
        <div className="event-card">
          <div>{event.title}</div>
        </div>
      </Link>
  )
}

export default EventCard