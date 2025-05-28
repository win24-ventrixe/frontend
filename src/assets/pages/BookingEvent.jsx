import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'


const BookingEvent = () => {
    const navigate = useNavigate()
    const { id } = useParams() 
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id, 
        firstName: '', 
        lastName: '', 
        email: '', 
        streetName: '', 
        postalCode: '', 
        city: '',
        ticketQuantity: 1
    })

    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        try { 
            const res = await fetch (`https://ecpn-eventservice-e9g5a8adcxh8dmcv.swedencentral-01.azurewebsites.net/api/Events/${id}`) 
            if (!res.ok) throw new Error("Failed to fetch event")

            const data = await res.json()
            setEvent(data.result)
        } catch (err) {
            console.log(err)
        }
    }

        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData(prev => ({ ...prev, [name]: value }))
        }

        const handleSubmit = async (e) => {
            e.preventDefault()

            try { 
                const res = await fetch (`https://ecpn-bookingservice-gcdtcjhqb0brdtbz.swedencentral-01.azurewebsites.net/api/Bookings`, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }) 

                if (!res.ok) {
                    console.error("Booking failed")
                } else {
                    console.log("Booking successful")
                    navigate('/')
                }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }


    return (
        <div className="portal-wrapper">
            <Nav />
            <Header />
            <main className="book-event"> 
                <h4 className="book-event-title">Book Event - {event.title}</h4>
                <div>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label className="form-label">First Name: </label>
                            <input type="text" className="form-input" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Last Name: </label>
                            <input type="text" className="form-input" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email: </label>
                            <input type="email" className="form-input" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Street Name: </label>
                            <input type="text" className="form-input" name="streetName" value={formData.streetName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Postal Code: </label>
                            <input type="text" className="form-input" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">City: </label>
                            <input type="text" className="form-input" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <button className="btn-book-event" type="submit">Book now</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default BookingEvent