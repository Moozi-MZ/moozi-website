import React from 'react';
import './Marquee.css'; // Assuming you have the necessary CSS
import Marquee from 'react-fast-marquee';

const MarqueeLine = ({language}) => {

  console.log("Language from Marquee: ", language);

  return (
    <Marquee
      autoFill={true}
      pauseOnHover={true}
      gradient={true}
      gradientWidth={200}
      direction='right'

    >


      <div className="marquee-text">
         <p>
          {language === 'en' ? 'Ride with Moozi!' : 'Vuna com Moozi!'} &nbsp;
         </p>

      </div>
    </Marquee>
  );
};

export default MarqueeLine;
