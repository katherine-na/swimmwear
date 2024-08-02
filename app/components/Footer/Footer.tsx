import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <p className='footer-brand'>Sunshine</p>
        <p>Fashion, comfort, perfect for looking impeccable on any occasion under the sun.</p>
      </div>
      <div className='footer-follow-us'>
        <p>Follow us</p>
        <div className='icons'>
        <FontAwesomeIcon icon={faFacebook} className='icon'/>
        <FontAwesomeIcon icon={faInstagram} className='icon'/>
        <FontAwesomeIcon icon={faAppStore} className='icon'/>
        <FontAwesomeIcon icon={faGooglePlay} className='icon' />
        </div>
      </div>
      <div className='footer-call-us'>
        <p>Call us</p>
        <p>+52 5515 4095</p>
      </div>
      <div className='footer-email'>
        <p>Receive notifications of new news</p>
        <form action="">
            <input type="email" name="" id="" />
            <button>send</button>
        </form>
      </div>
    </div>
  )
}

export default Footer;