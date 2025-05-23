import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import locationdot from '/src/assets/images/location-dot.svg'
import calendardot from '/src/assets/images/calendar-dot.svg'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'



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
    <div className="event-details portal-wrapper">
      <Nav />
      <Header />
      <main> 
      <img src={event.image} />
        <h1>{event.title}</h1>
        <div>
          <img src={locationdot} />
          {event.eventDate}
        </div>
        <div>
          <img src={calendardot} />
          {event.location}
        </div>
        <div>{event.description}</div>

        <Link to={`/events/booking/${id}`}>Book event</Link>
        </main>
        <Footer />
    </div>
  )
}

export default EventDetails