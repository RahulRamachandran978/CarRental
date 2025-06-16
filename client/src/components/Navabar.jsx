import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { href, useNavigate } from 'react-router-dom';

const navItems = [
    {name:"Home",href:"#hero"},
    {name:"How it Work",href:"#howitwork"},
    {name:"Why choose us",href:"#hero"}
]
const Navabar = () => {
    const [isUser,setIsUser] = useState(false);
    const navigate = useNavigate(); 

    const handleAuthClick = ()=>{
        if(isUser){
            setIsUser(false)
            navigate('/')
        }else{
            navigate('/login')
        }
    }
  return (
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
            <div className='d-flex gap-3 nav-btn'>
                {!isUser && (
                    <button type='button' className='btn btn-primary btn-style' onClick={handleAuthClick}>{isUser ? 'Logout' : 'Login'}</button>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navabar
