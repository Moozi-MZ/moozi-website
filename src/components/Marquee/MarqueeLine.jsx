import React from 'react';
import './Marquee.css'; // Assuming you have the necessary CSS
import Marquee from 'react-fast-marquee';

const MarqueeLine = () => {
  return (
    <Marquee
      autoFill={true}
      pauseOnHover={true}
      gradient={true}
      gradientWidth={600}
      direction='right'

    >


      <div className="marquee-text">
         <p>Ride with Moozi &nbsp;</p>

      </div>
    </Marquee>
  );
};

export default MarqueeLine;
