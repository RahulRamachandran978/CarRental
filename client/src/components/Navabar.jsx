import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { href, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

const navItems = [
    {name:"Home",href:"#hero"},
    {name:"How it Work",href:"#howitwork"},
    {name:"Why choose us",href:"#hero"}
]
const Navabar = () => {
    const [isUser,setIsUser] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleAuthClick = ()=>{
        if(isUser){
            setIsUser(false)
            navigate('/')
        }else{
            navigate('/login')
        }
    }
    
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <>
        <nav className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center  gap-3 p-3 logo-sec'>
                    <img src="/images/logo.png" alt="logo" className='cursor' />
                    <a className='logo cursor'>Rent Cars</a>
                </div>
                {/* Desktop view */}
                <div className='d-none d-lg-flex gap-5'>
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className='nav-items'>{item.name}</a>
                    ))}
                </div>
                {/* Desktop Auth Button  */}
                <div className='d-none d-lg-flex gap-3 nav-btn'>
                    {!isUser && (
                        <button type='button' className='btn btn-primary btn-style' onClick={handleAuthClick}>{isUser ? 'Logout' : 'Login'}</button>
                    )}
                </div>
                {/* Mobile Menu icon */}
                <div className='d-lg-none'>
                    <button className='btn border-0' onClick={toggleMenu}>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</button>
                </div>
            </div>
        </nav>
        {/* Mobile offcanvas menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
            {/* Close Button */}
            <button className="btn border-0 align-self-end mb-4" onClick={toggleMenu}>
                <CloseIcon fontSize="large" />
            </button>
            {navItems.map((item,key)=>(
                <a key={key} href={item.href} className='nav-items mb-3' onClick={()=> setIsMenuOpen(false)}>{item.name}</a>
            ))}
            <button type="button" className="btn btn-primary mt-3 w-100" onClick={handleAuthClick}>
                {isUser ? 'Logout' : 'Login'}
            </button>
        </div>
    </>
  )
}

export default Navabar
