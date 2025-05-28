import React, { useEffect, useState} from 'react'
import EventCard from '../components/EventCard'


const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch ("https://ecpn-eventservice-e9g5a8adcxh8dmcv.swedencentral-01.azurewebsites.net/api/Events") 

        if (res.ok) {
        const response = await res.json()
        setEvents(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])


  return (
    <section id="events">
        {
            

            events.map(event => (
            <EventCard key={event.id} event={event} /> //Alt. event={event} ?
            ))
        }
    </section>
  )
}

export default EventList