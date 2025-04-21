import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ICON from '../../assets/ICON.png'

import './Footer.css';

import { FaSquareFacebook, FaInstagram, FaSquareXTwitter, FaTiktok, FaLinkedinIn, FaLinkedin } from "react-icons/fa6";
import FooterLogo from '../../assets/logo-white-letters.png'
import { Downloads } from '../Downloads';

export const Footer = ({language}) => {

  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
        <div className='footer'>
            <div className='footer-container'>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                  <nav>
                  {language === 'en' ? (
                    <>
                      <h6 className="footer-title">Services</h6>
                      <a className="link link-hover">Client</a>
                      <a className="link link-hover">Driver</a>
                      <a className="link link-hover">Retnals</a>
                      <a className="link link-hover">Advertisement</a>
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Serviços</h6>
                    <a className="link link-hover">Cliente</a>
                    <a className="link link-hover">Condutor</a>
                    <a className="link link-hover">Rentals</a>
                    <a className="link link-hover">Publicidade</a>
                  </>
                  )}
                  </nav>
                  <nav>
                  {language === 'en' ? (
                    <>
                      <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Empresa</h6>
                    <a className="link link-hover">Sobre nós</a>
                    <a className="link link-hover">Contacto</a>
                    <a className="link link-hover">Carreiras</a>
                  </>
                  )}
                  </nav>
                  <nav>
                  {language === 'en' ? (
                    <>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    {/* <a className="link link-hover">Cookie policy</a> */}
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Termos de Utilização</a>
                    <a className="link link-hover">Política de Privacidade</a>
                    {/* <a className="link link-hover">Política de Cookies</a> */}

                  </>
                  )}
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
                                    <p className='copyright-text'>Copyright © 2025 - Moozi, Lda</p>
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
