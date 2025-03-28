import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import { FaSquareFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import FooterLogo from '../../assets/logo-white-letters.png'

export const Footer = () => {

    const [isFocused, setIsFocused] = useState(false)

  return (
    <>
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo'>
                        <img src={FooterLogo} alt='footer-logo' width={130} height={70}></img>
                    </div>
                    <div className='footer-socials'>
                        <span>
                            Siga-nos Aqui:
                        </span>
                        <div className='footer-socials-box'>
                            <Link to=''><FaSquareFacebook size={35} /></Link>
                            <Link to=''><FaInstagram size={36}/></Link>
                            <Link to=''><FaSquareXTwitter size={36}/></Link>
                        </div>
                    </div>

                </div>
                <div className='separator'></div>

                <div className='footer-services'>
                    <div className='footer-list'>
                        <h5 className='footer-list-heading'>Info</h5>
                        <br></br>
                        <Link><h5 className='footer-list-item'>Newsroom</h5></Link>
                        <Link><h5 className='footer-list-item'>Careers</h5></Link>
                        <Link><h5 className='footer-list-item'>FAQs</h5></Link>
                        <Link><h5 className='footer-list-item'>Site Map</h5></Link>
                        <Link><h5 className='footer-list-item'>Blog</h5></Link>                        
                    </div>
                    <div className='footer-list'>
                        <h5 className='footer-list-heading'>Partners</h5>
                        <br></br>
                        <Link><h5 className='footer-list-item'>Franchising</h5></Link>
                        <Link><h5 className='footer-list-item'>Inverstor Relations</h5></Link>
                        <Link><h5 className='footer-list-item'>PF Purpose</h5></Link>
                    </div>
                    <div className='footer-list'>
                        <h5 className='footer-list-heading'>Legal</h5>
                        <br></br>
                        <Link><h5 className='footer-list-item'>Privacy Policy</h5></Link>
                        <Link><h5 className='footer-list-item'>Terms and Conditions</h5></Link>
                        <Link><h5 className='footer-list-item'>FAQs</h5></Link>
                        <Link><h5 className='footer-list-item'>Site Map</h5></Link>
                        <Link><h5 className='footer-list-item'>Blog</h5></Link>
                    </div>
                    {/* <div className='mailing-subscription'>
                        <h1>Subscreva-se a nossa lista de correios! </h1>
                        <div className={`mail-input ${isFocused ? 'focused' : ''}`}>
                            <input 
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            type='text' className='mail-input-box' placeholder='Escreva o seu email'></input>
                            <button type='submit' className='mail-submit'>Subscrever</button>
                        </div>
                    </div> */}
                </div>

                <div className='separator'></div>

                <div className='copyright'>
                    <p>Copyright © 2024 - Moozi, Lda</p>
                    <p className='copyright-credit'>Designed by <Link to=''>Leonardo Colaço</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}
