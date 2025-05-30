import React, { useEffect, useState} from 'react'
import EventCard from '../components/EventCard'


const EventList = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true) // ChatGPT for spinning wheel while loading list (add loading)


    const getEvents = async () => {
        const res = await fetch ("https://ecpn-eventservice-e9g5a8adcxh8dmcv.swedencentral-01.azurewebsites.net/api/Events") 

        if (res.ok) {
        const response = await res.json()
        setEvents(response.result)
        }

        setLoading(false) // ChatGPT for spinning wheel while loading list (set loading to false after fetch) 

    }

    useEffect(() => {
        getEvents()
    }, [])


  return (
    <section id="events">
        {
        loading ? ( // ChatGPT for spinning wheel while loading list (show spinner if loading) 
            <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner" />
            </div>
        ) : (
            

            events.map(event => (
            <EventCard key={event.id} event={event} /> 
            ))
        )}
    </section>
  )
}

export default EventList