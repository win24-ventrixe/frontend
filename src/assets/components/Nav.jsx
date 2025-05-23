import React from 'react'
import { NavLink } from 'react-router-dom'
import ventixelogo from '/src/assets/images/ventixe-logo.svg'
import dboradevents from '/src/assets/images/d-board-events.svg'

const Nav = () => {
  return (
    <nav>
      <h2 className="d-board-header"><img src={ventixelogo} alt="" /><span className="d-board-logo-name"> Ventixe</span></h2>
      <NavLink to="/" className="d-board-links"><img src={dboradevents} /><span className="d-board-link-name">Events</span></NavLink>
    </nav>
  )
}

export default Nav