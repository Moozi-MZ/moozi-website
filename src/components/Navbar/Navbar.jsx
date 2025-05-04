import {useState, useEffect} from 'react'
import './Navbar.css';

import ICON_WHITEBG from '../../assets/logo-white-letters.png';
import LANGUAGE_EN from '../../assets/button-icons/english.svg';
import LANGUAGE_PT from '../../assets/button-icons/portuguese.svg';
import EN_LANG from '../../assets/button-icons/en_lang.png';
import PT_LANG from '../../assets/button-icons/pt_lang.png';
import SUPPORT_ICON from '../../assets/button-icons/support-icon.svg';
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';
import { ICON_SIZE } from '../../utils/Constants';
import { Downloads } from '../Downloads';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const { language, changeLanguage } = useLanguage();

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
                        <Link to="/moozi-website/"><img src={ICON_WHITEBG} ></img></Link>
                    </div>

                    <div className="navbar-links-container">
                        <div className="">
                            <Link to='/moozi-website/client'>
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">
                            {language === 'en' ? `Client` : `Cliente`}
                                </div>
                            </Link>
                            
                        </div>

                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">
                            {language === 'en' ? `Driver` : `Condutor`}
                                </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to='/moozi-website/driver'>{language === 'en' ? `Drive with Moozi` : `Conduz com a Moozi`}</Link></li>
                                <li><Link to='/moozi-website/vehicle-category'>{language === 'en' ? `Vehicle Category` : `Categoria de Veículos`}</Link></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover ">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">
                                {language == 'en' ? `About Us` : `Sobre Nós`}
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to='/moozi-website/about'>{language === 'en' ? `Who we Are` : `Quem Somos`}</Link></li>
                                <li><Link to='/moozi-website/corporate'>{language === 'en' ? `Corporation Account` : `Conta Corporativa`}</Link></li>
                            </ul>
                        </div>

                        <div className="">
                            <div tabIndex={0} className="navbar-link-button navbar-button-hover">
                            {language === 'en' ? `Download the App` : `Baixe o Aplicativo`}</div>
                            
                        </div>

                    </div>
                </div>
                <div className="navbar-right">

                    <div className="navbar-language-help-container">
                        <div className='navbar-language-select'>
                            <div className="dropdown dropdown-bottom ">
                                <div tabIndex={0} className="language-button navbar-button-hover">
                                    <img  className="icon" src={language == 'en' ? LANGUAGE_EN : LANGUAGE_PT } width={ICON_SIZE} />
                                </div>
                                <ul tabIndex={0} className="lang-list dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li onClick={() => changeLanguage('pt')}><a> 
                                            {/* <img className="lang_icon" src={PT_LANG}/> */}
                                            <p className='lang-list-p'>Português</p>
                                        </a></li>
                                    <li onClick={() => changeLanguage('en')}><a> 
                                            {/* <img className="lang_icon" src={EN_LANG} /> */}
                                            <p className='lang-list-p'>English</p>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="navbar-help">
                            <div className="support-contact navbar-button-hover">
                                <img className="icon"  src={SUPPORT_ICON} width={ICON_SIZE}/>
                                <div>
                                    <p>{language === 'en' ? `Support` : `Suporte`}</p>
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
          <Link to='/moozi-website/' className=" text-2xl mx-2 font-bold text-white">Moozi</Link>
        </div>
        <div className="flex-none text-white">
            <ul className="menu menu-horizontal">
                <li>
                    <details>
                    <summary><GlobeEuropeAfricaIcon aria-hidden="true" className="size-8 text-white" /> </summary>
                    <ul className="text-black rounded-2xl w-40
                    h-24 right-[0.01rem]">
                        <li  onClick={() => changeLanguage('pt')}><a>
                            <img className="lang_icon" src={PT_LANG} width={28} />
                            <p className='lang-list-p'>Português</p></a></li>
                        <li  onClick={() => changeLanguage('en')}><a>
                            <img className="lang_icon" src={EN_LANG} width={28} />
                            <p className='lang-list-p'>English</p></a></li>
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
                <li className="pt-4"><Link to="/moozi-website/">{language === 'en' ? `Home` : `Página Inicial`}</Link></li>
                <li className="py-4"><Link to="/moozi-website/client">{language === 'en' ? `Client` : `Cliente`}</Link></li>
                <li><Link to="/moozi-website/driver">{language === 'en' ? `Driver` : `Condutor`}</Link></li>
                <li className='py-4'><Link to='/moozi-website/about'>{language === 'en' ? `About Us` : `Sobre Nós`}</Link></li>
            </ul>

            {/* Push this div to the bottom */}
            <div className="bottom-side mt-">
                <Downloads />
                <Link to="">
                    <div className="support-contact navbar-button-hover">
                        <img className="icon" src={SUPPORT_ICON} width={ICON_SIZE} />
                        <div>
                            <p>{language === 'en' ? `Support` : `Suporte`}</p>
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
