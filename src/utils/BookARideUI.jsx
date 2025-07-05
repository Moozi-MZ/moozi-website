import { useEffect } from "react";


const BookARideUI = () => {

    const RunBookingAPI = async () => {

        if (document.querySelector("script.peerbits")) return; // Prevent duplicates

        const script = document.createElement('script');
        script.src = 'https://prod-yelowtaxi-content.s3.us-west-2.amazonaws.com/live_web_booking_v3_3.js';
        script.async = true;
        script.className = 'peerbits';
        script.setAttribute('domain', 'moozi');
        script.type = 'text/javascript';
    
        document.body.appendChild(script);
        // Wait for the script to finish loading and run
        script.onload = () => {
            // Query the element(s) created by the script
            const bookingWrapper = document.querySelector(".web-booking-wrapper");

            // Check if the element exists before trying to add a class
            if (bookingWrapper) {
                bookingWrapper.classList.add("hide");
            }
        };

        return;

    }

    RunBookingAPI()
}

export default BookARideUI;