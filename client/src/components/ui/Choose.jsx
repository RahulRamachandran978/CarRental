import React from 'react'
import { BsPersonFillCheck } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const Choose = () => {
  return (
    <>
    <div id='chooseus' className='container py-5'>
        <div className='text-center'>
            <button className='btn mb-5 btn-head text-uppercase'>Why Choose Us</button>
        </div>

        <div className='row align-items-center'>
            {/* Left image section */}
            <div className='col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start'>
            <img
                src='/images/Audi 1.png'
                alt='Why Choose Us'
                className='img-fluid w-100 w-md-75'
            />
            </div>

            {/* Right content section */}
            <div className='col-12 col-md-6 text-center text-md-start'>
            <h2 className='choose-title mb-3 mt-4'>We offer the best experience with our rental deals</h2>
            <div className='d-flex gap-5 align-items-center mt-5'>
                <div className='p-3 custSpprtIcon'>
                    <RiMoneyRupeeCircleFill size={30}/>
                </div>
                <div>
                    <h4>Best price guaranteed</h4>
                    <p className='sub-title'>Find a lower price? We’ll refund you 100% of the difference.</p>
                </div> 
            </div>
            <div className='d-flex gap-5 align-items-center mt-5'>
                <div className='p-3 custSpprtIcon'>
                    <BsPersonFillCheck size={30}/>
                </div>
                <div>
                    <h4>Experience driver</h4>
                    <p className='sub-title'>Don’t have driver? Don’t worry, we have many experienced driver for you</p>
                </div>
            </div>
            <div className='d-flex gap-5 align-items-center mt-5'>
                <div className='p-3 custSpprtIcon'>
                    <Ri24HoursFill size={30} />
                </div>
                <div>
                    <h4>24 hour car delivery</h4>
                    <p className='sub-title'>Book your car anytime and we will deliver it directly to you.</p>
                </div>
            </div>
            <div className='d-flex gap-5 align-items-center mt-5'>
                <div className='p-3 custSpprtIcon'>
                    <IoIosChatbubbles size={30} />
                </div>
                <div>
                    <h4>24/7 technical support</h4>
                    <p className='sub-title'>Have a question? Contact Rentcars support any time when you have problem.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Choose
