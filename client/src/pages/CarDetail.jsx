import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAcUnit } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

const CarDetail = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const car = state?.car;

    if(!car){
        return <div className='container py-5'><h2>No car details provided.</h2></div>;
    }
  return (
    <div className='container py-5' id='car-detail'>
         {/* Back Button */}
        <div className='d-flex justify-content-end mb-2'>
            <button
                className="btn btn-outline-primary "
                onClick={() => navigate(-1)}
            >
                &larr; Back
            </button>
        </div>
        <div className='row mt-5 align-items-center'>
            {/* left */}
            <div className='col-12 col-md-6'>
                <div>
                    <img src={car.image} alt={car.name} className='img-fluid'/>
                </div>
            </div>
            {/* right */}
            <div className='col-12 col-md-6'>
                <h2 className='text-primary fw-bold d-flex gap-3 mb-5 align-items-center'><FaCar/>{car.name}</h2>
                <p className='d-flex gap-3 align-items-center'><IoWallet size={20}/><strong>Price per day:</strong> ₹{car.price}</p>
                <p className='d-flex gap-3 align-items-center'><IoPersonSharp size={20}/><strong>Passengers:</strong> {car.passagers}</p>
                <p className='d-flex gap-3 align-items-center'><GiGearStickPattern size={20}/><strong>Transmission:</strong> {car.type}</p>
                <p className='d-flex gap-3 align-items-center'><GiCarDoor size={20}/><strong>Doors:</strong> {car.door}</p>
                <p className='d-flex gap-3 align-items-center'><MdOutlineAcUnit size={20}/><strong>AC:</strong> Yes</p>
                <button className='btn btn-primary mt-3'>Confirm Booking</button>
            </div>
        </div>
    </div>
  )
}

export default CarDetail
