import {useState, useEffect} from 'react'
import './Navbar.css';

import ICON_WHITEBG from '../../assets/logo-white-letters.png';
import LANGUAGE_EN from '../../assets/button-icons/english.svg';
import SUPPORT_ICON from '../../assets/button-icons/support-icon.svg';
import { ICON_SIZE } from '../../utils/Constants';

export const Navbar = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const SCROLL_THRESHOLD = 150;

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

    </>
  )
}
