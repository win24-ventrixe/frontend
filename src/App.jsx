import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
import BookingEvent from './assets/pages/BookingEvent'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/events/booking/:id" element={<BookingEvent />} />
    </Routes>
  )
}

export default App
