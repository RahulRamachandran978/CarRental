import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const testimonials = [
    {stars:"⭐⭐⭐⭐⭐",review:"“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",name:"Remya",designation:"Doctor",userImg:"/static/images/avatar/1.jpg"},
    {stars:"⭐⭐⭐⭐",review:"““I have been using your services for 3 years. Your service is great, I will continue to use your service.”",name:"Vivek",designation:"Software Engineer",userImg:"/static/images/avatar/2.jpg"},
    {stars:"⭐⭐⭐⭐⭐",review:"“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",name:"Surya",designation:"Mechanic",userImg:"/static/images/avatar/3.jpg"},
    {
    stars: "⭐⭐⭐⭐",
    review: "“Safe rides and fast pickups!”",
    name: "Arjun",
    designation: "Teacher",
    userImg: "/static/images/avatar/5.jpg",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    review: "“Best in town service!”",
    name: "Kiran",
    designation: "Chef",
    userImg: "/static/images/avatar/6.jpg",
  },
]
 
const Testimonal = () => {

    const [currentIndex , setCurrentIndex] = useState(0);

  return (
    <div className='container py-5' id='testimonials'>
      <div className='text-center'>
        <button className='btn mb-5 btn-head text-uppercase'>Testimonials</button>
        <h1 className='fw-bold'>What peole say <span className='text-primary'>about us?</span></h1>
      </div>
      <div className='row mt-5'>
        {testimonials.map((item,key)=>(
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 mb-4' key={key}>
                <div className='card h-100'>
                    <div className='card-body d-flex flex-column justify-content-between'>
                        <h5 className='card-title'>{item.stars}</h5>
                        <p className='text-muted fw-600'>{item.review}</p>
                        <div className='d-flex gap-3 align-items-center'>
                            <div className='user-img'>
                                <Avatar alt={item.name} src={item.userImg} />
                            </div>
                            <div>
                                <h6 className='fw-bold'>{item.name}</h6>
                                <span className='text-muted'>{item.designation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonal
