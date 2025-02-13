import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSnowflake} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import "../../styles/Navigate.css"
export default function Navigation() {
  const navigate=useNavigate();
  return (
    <div className="container">
        <div className="navbar">
            <nav className='items'>
              <div className="l1">
                <h1>VENGEANCE.</h1>
                <ol onClick={()=>{navigate('/landingpage-react/')}}><FontAwesomeIcon icon={faSnowflake} color='white' />&nbsp;Home</ol>
                <ol onClick={()=>{navigate('/landingpage-react/Book Now')}}><FontAwesomeIcon icon={faSnowflake} color='white' />&nbsp;Book now</ol>
                <ol onClick={()=>{navigate('/landingpage-react/Popular Places')}}><FontAwesomeIcon icon={faSnowflake} color='white' />&nbsp;Popular places</ol>
                <ol onClick={()=>{navigate('/landingpage-react/Signin')}}><FontAwesomeIcon icon={faSnowflake} color='white' />&nbsp;Signin</ol>
                <ol className='Logout' onClick={()=>{navigate('/landingpage-react/Logout')}}><FontAwesomeIcon icon={faSnowflake} color='white' />&nbsp;Logout</ol>
                </div>
                <div className="l2">
                <ol className='EN-before'><button className='EN'>&nbsp;&nbsp;<FontAwesomeIcon icon={faGlobe} color='white'/>&nbsp;&nbsp;EN&nbsp;&nbsp;</button></ol>
                <ol onClick={()=>{navigate('/landingpage-react/Contactus')}} className='contact-before'><button className='contact'><FontAwesomeIcon icon={faPhone} color='black'/>&nbsp;&nbsp;Contact us</button></ol>
                </div>
            </nav>
        </div>
    </div>
  )
}
