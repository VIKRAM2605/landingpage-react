import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../../styles/Home.css"
import Card from '../Cards/Card'
export default function Home() {
  return (
    <>
    <div className='home-container'>
        <h1 className='home-h1'>Where every journey<br></br>become an adventure.</h1>
    </div>
    <div className="some">
    <div className="inputs">
        <FontAwesomeIcon icon={faLocationDot} className='location'  />
        <input type="text" placeholder='  Where you want to go?...' className='input1' />
        <FontAwesomeIcon icon={faCalendarDays} className='calender'/>
        <input type="text" placeholder= "  Add dates" className='input2' />
        <FontAwesomeIcon icon={faUser} className='user' />
        <input type="text" placeholder='  Guests' className='input3' />
        <button className='search'>&nbsp;&nbsp;Search&nbsp;<FontAwesomeIcon icon={faArrowRight} />&nbsp;</button>
    </div>
    </div>
    <div className="details">
    <Card numbers="200+" text="Destination"></Card>
    <Card numbers="10,000+" text="Happy Customer"></Card>
    <Card numbers="100+" text="Experienced Guide"></Card>
    </div>
    </>
  )
}
