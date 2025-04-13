import {useState, useEffect} from 'react'
import './Navbar.css';

import ICON_WHITEBG from '../../assets/logo-white-letters.png';
import LANGUAGE_EN from '../../assets/button-icons/english.svg';
import SUPPORT_ICON from '../../assets/button-icons/support-icon.svg';
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';
import { ICON_SIZE } from '../../utils/Constants';
import { Downloads } from '../Downloads';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const SCROLL_THRESHOLD = 120;

    // Function to handle scroll direction
    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
            // Scroll down and pass threshold
            setNavbarVisible(false);
        } else if (window.scrollY < lastScrollY) {
            // Scroll up
            setNavbarVisible(true);
        }

        setLastScrollY(window.scrollY);
    };

    // Set up the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);



  return (
    <>
        <div className={`navbar-all `}>
            <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>

                <div className='navbar-standard-container'>

                <div className="navbar-left">
                    <div className="navbar-logo-container">
                        <img src={ICON_WHITEBG} ></img>
                    </div>

                    <div className="navbar-links-container">
                        <div className="">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">Ride</div>
                            
                        </div>

                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">Drive</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover ">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">About</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">Download the App</div>
                            
                        </div>

                    </div>
                </div>
                <div className="navbar-right">

                    <div className="navbar-language-help-container">
                        <div className='navbar-language-select'>
                            <div className="dropdown dropdown-bottom ">
                                <div tabIndex={0} className="language-button navbar-button-hover">
                                    <img  className="icon" src={LANGUAGE_EN} width={ICON_SIZE} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="navbar-help">
                            <div className="support-contact navbar-button-hover">
                                <img className="icon"  src={SUPPORT_ICON} width={ICON_SIZE}/>
                                <div>
                                    <p>Support</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="navbar-all-mobile">
  <div className="navbar-container-mobile">
    <div className="drawer">
      {/* Hidden checkbox for toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />

      {/* Main Navbar */}
      <div className="overflow-y-visible tw-navbar-mobile navbar w-dvw bg-base-[#017eff] ">
        {/* Sidebar Toggle Button (Part of Navbar) */}
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          
        </div>

        {/* Navbar Title */}
        <div className="flex-1">
          <a className=" text-2xl mx-2 font-bold text-white">Moozi</a>
        </div>
        <div className="flex-none text-white">
            <ul className="menu menu-horizontal">
                <li>
                    <details>
                    <summary><GlobeEuropeAfricaIcon aria-hidden="true" className="size-8 text-white" /> </summary>
                    <ul className="text-black rounded-2xl w-40
                    h-20 right-[0.01rem]">
                        <li><a>English</a></li>
                        <li><a>Português</a></li>
                    </ul>
                    </details>
                </li>
            </ul>
        </div>
        
      </div>

      {/* Sidebar (Menu + Navbar Content) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col">
            {/* Sidebar Navbar (Keeps button & title visible) */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">Moozi</span>
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                ✖
                </label>
            </div>

            {/* Sidebar Links */}
            <ul className="text-3xl py-4">
                <li className="py-4"><a href="#">Ride</a></li>
                <li><a href="#">Drive</a></li>
            </ul>

            {/* Push this div to the bottom */}
            <div className="bottom-side mt-">
                <Downloads />
                    <Link to=''>
                <div className="support-contact navbar-button-hover">
                                <img className="icon"  src={SUPPORT_ICON} width={ICON_SIZE}/>
                                <div>
                                    <p>Support</p>
                                </div>
                            </div>
                    </Link>
            </div>
        
        </div>

      </div>
    </div>
  </div>
</div>


    </>
  )
}
