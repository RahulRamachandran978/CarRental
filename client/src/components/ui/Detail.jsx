import React from 'react'
import { FaCheckCircle, FaCalendarAlt, FaCarSide } from 'react-icons/fa';


const steps = [
  {
    icon: <FaCheckCircle size={32} color="#2563EB" />,
    title: "Choose your car",
    description: "Choose your and find your best car"
  },
  {
    icon: <FaCalendarAlt size={32} color="#2563EB" />,
    title: "Pick a date",
    description: "Select your pick up date and time to book your car"
  },
  {
    icon: <FaCarSide size={32} color="#2563EB" />,
    title: "Book and recesive",
    description: "Book your car and we will deliver it directly to you"
  },
];

const logos = [
  { name: 'Toyota', image: '/images/toyota.png' },
  { name: 'Honda', image: '/images/honda.jpeg' },
  { name: 'Audi', image: '/images/audi.png' },
  { name: 'Volkswagen', image: '/images/volkswageon.jpeg' },
//   { name: 'Audi', image: '/logos/audi.png' },
];

const Detail = () => {
  return (
    <>
    <div className="container text-center bg-light py-5" id='howitwork'>
      <button className="btn mb-3 btn-head capital-text">How it works</button>
      <h1 className="fw-bold">Rent with following <span className="text-primary">3 working steps</span></h1>
      
      <div className="row mt-5">
        {steps.map((step, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx}>
            <div className="step-card p-4 rounded mx-auto">
              <div className="icon mb-3">{step.icon}</div>
              <h5 className="mb-2 fw-semibold">{step.title}</h5>
              <p className="text-muted small">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* carousel section  */}
        <div className='carosuel-wrapper py-5 '>
            <h2 className='text-center mb-4 fw-bold'>Our Trusted Brands</h2>
            <div className='carousel-track-wrapper mt-5'>
                <div className='carousel-track d-flex justify-content-around align-items-center gap-15 px-4'>
                {logos.concat(logos).map((logo,index)=>(
                    <div className='text-center' key={index}>
                        <div>
                          <img src={logo.image} alt={logo.name} style={{ width: '60px', height: 'auto' }}/>
                        </div>
                        <div>
                          <p className="mt-2 logo-font">{logo.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Detail
