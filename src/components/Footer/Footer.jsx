import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ICON from '../../assets/ICON.png'

import './Footer.css';

import { FaSquareFacebook, FaInstagram, FaSquareXTwitter, FaTiktok, FaLinkedinIn, FaLinkedin } from "react-icons/fa6";
import FooterLogo from '../../assets/logo-white-letters.png'
import { Downloads } from '../Downloads';

export const Footer = () => {

    const [isFocused, setIsFocused] = useState(false)

  return (
    <>
        <div className='footer'>
            <div className='footer-container'>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <Downloads />
  </nav>
</footer>
<footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 mb-20 sm:mb-10">
  <nav className="md:place-self-center mx-auto md:justify-self-center">
    <div className="grid grid-flow-col gap-4 ">
    <div className='footer-socials-box'>
                            <Link to=''><FaSquareFacebook size={35} /></Link>
                            <Link to=''><FaInstagram size={36}/></Link>
                            <Link to=''><FaTiktok size={36}/></Link>
                            <Link to=''><FaLinkedinIn size={36}/></Link>
                        </div>
    </div>
  </nav>
  <aside className="flex mx-auto items-center">
    
    
      <div className='copyright mx-auto'>
                    <p className='copyright-text'>Copyright © 2024 - Moozi, Lda</p>
                    <p className='copyright-credit'>
                        Designed by&nbsp; <Link to='https://leonardobloom.github.io/portfolio-website/'> <span><img src={ICON} alt=""/></span></Link>
                    </p>
                    
                </div>
    
  </aside>
</footer>
            </div>
        </div>
    </>
  )
}
