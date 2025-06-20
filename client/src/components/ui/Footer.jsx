import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-footer text-white py-4">
      <div className="row justify-content-between">
        {/* Column 1 */}
        <div className="col-12 col-sm-6 col-lg-2 mb-4">
          <div className="d-flex align-items-center gap-2 mb-3 logo-sec">
            <img src="/images/logo.png" alt="logo" className="cursor" width={30} height={30} />
            <a className="logo cursor text-white text-decoration-none">Rent Cars</a>
          </div>
          <div className="d-flex align-items-start gap-2 mb-2">
            <CiLocationOn size={20} />
            <p className="mb-0">25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
          </div>
          <div className="d-flex align-items-start gap-2 mb-2">
            <IoCallOutline size={20} />
            <p className="mb-0">+1 (800) 123-4567</p>
          </div>
          <div className="d-flex align-items-start gap-2">
            <GoMail size={20} />
            <p className="mb-0">rentcars@gmail.com</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-sm-6 col-lg-2 d-flex flex-column">
          <h5>Our Product</h5>
          <ul className='footer-list'>
            <li>Career</li>
            <li>Car</li>
            <li>Packages</li>
            <li>Features</li>
            <li>Priceline</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-sm-6 col-lg-2 d-flex flex-column ">
          <h5>Resources</h5>
          <ul className='footer-list'>
            <li>Download</li>
            <li>Help Centre</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-12 col-sm-6 col-lg-2 d-flex flex-column ">
          <h5>About Rentcars</h5>
          <ul className='footer-list'>
            <li>Why choose us</li>
            <li>Help Centre</li>
            <li>Our Story</li>
            <li>Investor Relations</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="col-12 col-sm-6 col-lg-2 d-flex flex-column ">
          <h5>Follow Us</h5>
          <div className='d-flex gap-3 mt-1'>
            <FaInstagram size={20} />
            <FaFacebook size={20}/>
            <FaWhatsapp size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
