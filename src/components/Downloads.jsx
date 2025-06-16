import React from 'react'
import './Downloads.css';
import {Link} from 'react-router-dom';

import ANDROID from '../assets/download-android.webp'
import IPHONE from '../assets/download-iphone.png';

export const Downloads = ({language}) => {
  return (
    
    <div className='downloads-container'>
        {/* <h1>Download our App</h1> */}
        <div className='downloads-content'>
            <Link to='https://play.google.com/store/apps/details?id=com.moozi.user&pcampaignid=web_share'>
                <div className='download-button'>
                    <img className="android" src={ANDROID} />
                </div>
            </Link>

            <Link to='https://apps.apple.com/ee/app/moozi-app/id6744141000'>
                <div className="download-button">
                    <img className="iphone" src={IPHONE} />
                </div>
            </Link>
        </div>
    </div>
  )
}
