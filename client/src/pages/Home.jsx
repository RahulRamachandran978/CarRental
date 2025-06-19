import React from 'react'
import Navabar from '../components/Navabar'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../index.css'
import Detail from '../components/ui/Detail';
const Home = () => {
  return (
     <>
        <div className="container-fluid min-vh-100 d-flex flex-column p-0" id='hero'>
        <Navabar />
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="row w-100 align-items-center">
            {/* Text Section */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center text-center text-md-start mb-4 mb-md-0">
              <div className="hero-text">
                <h2 className="fw-bold">
                  Find book and rent a car <span className="text-primary">Easily</span>
                </h2>
                <p>
                  Get a car wherever and whenever you <br />
                  need it with your iOS and Android device.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-8 hero-img-sec mb-4 mb-md-0">
              <img src="/images/car 2 1.png" alt="hero-img" className="w-100 hero-img" />
            </div>

            {/* Filters Section */}
            <div className="col-12 mt-4">
              <div className="row g-3 align-items-center justify-content-between flex-column flex-md-row px-3">
                <div className="d-flex align-items-center justify-content-center gap-2 col-12 col-md-3">
                    <LocationOnIcon className="custom-icon" />
                    <div>
                      <h5 className="mb-1">Location</h5>
                      <p className="mb-0 small text-muted">Search your location</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 col-12 col-md-3">
                    <CalendarMonthIcon className="custom-icon" />
                    <div>
                      <h5 className="mb-1">Pick up date</h5>
                      <p className="mb-0 small text-muted">Tue 15 Feb, 09:00</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 col-12 col-md-3">
                    <CalendarMonthIcon className="custom-icon" />
                    <div>
                      <h5 className="mb-1">Return date</h5>
                      <p className="mb-0 small text-muted">Thu 16 Feb, 11:00</p>
                    </div>
                </div>
                {/* Search Button */}
                <div className="col-12 col-md-auto">
                  <button className="btn btn-primary btn-search w-100 w-md-auto btn-style">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Detail />
     </>
  )
}

export default Home
