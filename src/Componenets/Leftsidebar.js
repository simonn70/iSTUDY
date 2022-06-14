import React from 'react'
import './components.css'
import loggo from './images/loggo.svg'

function Leftsidebar() {

  return (
    <div className='sidebar'>
     <img src={loggo} alt='logo' />
      <a ><h6>iSTUDY</h6></a>
    <ul className='list'>
      <i className="fa-solid fa-house"></i>
      <a ><h5>DASHBOARB</h5></a>
      <i className="fa-solid fa-book-open"></i>
      <a ><h5>STUDY</h5></a>
      <i className="fa-solid fa-comment-dots"></i>
      <a ><h5>DISCUSS</h5></a>
      <i className="fa-solid fa-gear"></i>
      <a ><h5>SETTING</h5></a>
      
    </ul>
    
    </div>
  )
}

export default Leftsidebar