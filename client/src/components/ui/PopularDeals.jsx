import React from 'react'

import { BsPersonFillCheck } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAcUnit } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

const popularItems = [
    {name:"Swift", image:"/items/item1.png",price:"900"},
    {name:"Polo GT", image:"/items/item2.png",price:"1000"},
    {name:"Harrier", image:"/items/item3.png",price:"1500"},
    {name:"Innova Hycross", image:"/items/item4.png",price:"1300"},
]

const PopularDeals = () => {
  return (
    <div className='container py-5 bg-light' id='popular-deals'>
      <div className='text-center'>
        <button className='btn mb-5 btn-head text-uppercase'>Popular Rental Deals</button>
        <h1 className='fw-bold'>Most popular cars <span className='text-primary'>rental deals</span></h1>
      </div>
       <div className='row mt-5'>
        {popularItems.map((item, key) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={key}>
            <div className='card h-100 shadow-sm d-flex flex-column'>
              <div className='card-img-top-wrapper'>
                <img src={item.image} alt={item.name} className='card-img-top' />
              </div>
              <div className='card-body d-flex flex-column justify-content-between'>
                <div>
                  <h5 className='card-title'>{item.name}</h5>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <BsPersonFillCheck size={20}/>
                        <h6>4 Passagers</h6>
                    </div>
                    <div className='d-flex gap-2'>
                        <GiGearStickPattern size={20}/>
                        <h6>Auto</h6>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <MdOutlineAcUnit size={20}/>
                        <h6>Air Conditioning</h6>
                    </div>
                    <div className='d-flex gap-2'>
                        <GiCarDoor size={20}/>
                        <h6>4 Doors</h6>
                    </div>
                  </div>
                  <h6 className='card-text text-muted'>Price per day: ₹ {item.price}</h6>
                </div>
                <button className='btn btn-primary mt-3'>Rent Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularDeals
