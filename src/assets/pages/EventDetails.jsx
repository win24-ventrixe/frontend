import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import locationdot from '/src/assets/images/location-dot.svg'
import calendardot from '/src/assets/images/calendar-dot.svg'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const formatDateToReadable = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  });
 
  return `${formattedDate} - ${formattedTime}`;
};

const EventDetails = () => {
    const {id} = useParams() 

    const [event, setEvent] = useState({})

    const getEvents = async () => {
        const res = await fetch (`https://ecpn-eventservice-e9g5a8adcxh8dmcv.swedencentral-01.azurewebsites.net/api/Events/${id}`) 

        if (res.ok) {
        const response = await res.json()
        setEvent(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main className="event-details"> 
      <img className="event-details-img" src={event.image} />
        <h2 className="event-details-title">{event.title}</h2>

        {event.eventDate && ( 
          <div className="event-details-date">
            <img src={calendardot} />
            {formatDateToReadable(event.eventDate)}
          </div>
        )}

        <div className="event-details-location">
          <img src={locationdot} />
          {event.location}
        </div>
        <div className="event-details-description">
          <h4>About Event</h4>
          <p>{event.description}</p>
          </div>
          <button className="btn-primary">
            <Link to={`/events/booking/${id}`}>Book event</Link> 
          </button>
        </main>
        <Footer />
    </div>
  )
}

export default EventDetails