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
                      <Link to='/moozi-website/client' className="link link-hover">Client</Link>
                      <Link to='/moozi-website/driver'  className="link link-hover">Driver</Link>
                      <Link to='/moozi-website/faq' className="link link-hover">FAQs</Link>
                      {/* <a className="link link-hover">Rentals</a> */}
                      {/* <a className="link link-hover">Advertisement</a> */}
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Serviços</h6>
                    <Link to='/moozi-website/client' className="link link-hover">Cliente</Link>
                    <Link to='/moozi-website/driver' className="link link-hover">Condutor</Link>
                    <Link to='/moozi-website/faq' className="link link-hover">FAQs</Link>
                    {/* <a className="link link-hover">Rentals</a> */}
                    {/* <a className="link link-hover">Publicidade</a> */}
                  </>
                  )}
                  </nav>
                  <nav>
                  {language === 'en' ? (
                    <>
                      <h6 className="footer-title">Company</h6>
                    <Link to='/moozi-website/about' className="link link-hover">About us</Link>
                    <div className="link link-hover contact-support">
                      Contact
                      <div className='contact-support-content'>
                        <p className='contact-support-text'> For Support and Personalized Assistance, contact us:</p>
                        <p className='contact-support-text'>📞 +258 84 258 0258</p>
                        <p className='contact-support-text'>📧 Suporte@moozi.co.mz</p>
                      </div>
                    </div>
                    {/* <a className="link link-hover">Jobs</a> */}
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Empresa</h6>
                    <Link to='/moozi-website/about' className="link link-hover">Sobre nós</Link>
                    <div className="link link-hover contact-support">
                      Contacto
                      <div className='contact-support-content'>
                        <p className='contact-support-text'> Para Suporte e Apoio Personalizado, contacte-nos:</p>
                        <p className='contact-support-text'>📞 +258 84 258 0258</p>
                        <p className='contact-support-text'>📧 Suporte@moozi.co.mz</p>
                      </div>
                    </div>
                    {/* <a className="link link-hover">Carreiras</a> */}
                  </>
                  )}
                  </nav>
                  <nav>
                  {language === 'en' ? (
                    <>
                    <h6 className="footer-title">Legal</h6>
                    <Link to='/moozi-website/terms-and-conditions' className="link link-hover">Terms of use</Link>
                    <Link to='/moozi-website/privacypolicy' className="link link-hover">Privacy policy</Link>
                    {/* <a className="link link-hover">Cookie policy</a> */}
                    </>
                    
                  ) : (
                    <>
                    <h6 className="footer-title">Legal</h6>
                    <Link to='/moozi-website/terms-and-conditions' className="link link-hover">Termos de Utilização</Link>
                    <Link to='/moozi-website/privacypolicy' className="link link-hover">Política de Privacidade</Link>
                    {/* <a className="link link-hover">Política de Cookies</a> */}

                  </>
                  )}
                  </nav>
                  <nav>
                    <Downloads />
                  </nav>
                </footer>
                <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 mb-20 sm:mb-15">
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
                                        Designed by&nbsp; <Link to='https://leonardobloom.github.io/portfolio-website/'> <span><img src={ICON} alt="" title='Leonardo Colaço'/></span></Link>
                                    </p>
                                    
                                </div>
                    
                  </aside>
                </footer>
            </div>
        </div>
    </>
  )
}
