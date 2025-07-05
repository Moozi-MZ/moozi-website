import React from 'react'
import DRIVER from '../../assets/posts/driver.jpg'

export const DriverDiv = () => {
  return (
    <div class="max-w-[100%] mx-auto bg-gray-100 p-4 rounded-lg ">
        <div class="mx-auto pb-5 rounded-lg flex flex-wrap justify-center items-center space-x-6">
            <img src={DRIVER} alt="Placeholder Image" class="w-110 object-cover rounded-lg" />

            <div className='max-w-[600px]'>
            <h1 class="mb-5 text-xl font-bold">Want to be a Driver? </h1>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    
                </div>

                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>

                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>

        </div>
    </div>

  )
}
