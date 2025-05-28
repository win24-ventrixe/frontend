import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
import BookingEvent from './assets/pages/BookingEvent'
import BookingSuccess from './assets/pages/BookingSuccess'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/events/booking/:id" element={<BookingEvent />} />
      <Route path="/events/booking/bookingsuccess/:id" element={<BookingSuccess />} />

    </Routes>
  )
}

export default App
