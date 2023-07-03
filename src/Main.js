import React from 'react'
import image from './asset/image/martin-sanchez-pX91vVDV6GQ-unsplash.jpg'

export default function Main() {
 
  return (
    <div style={{width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundImage :`url(${image})` }}>
    <div style={{border: '1px solid white', width: '50%', height: '60%',}}>
      <p>Welcome to my portfolio page! I'm a software engineer driven by innovation and learning. With a strong focus on user-centric solutions, I collaborate effectively to deliver high-quality code. Explore my diverse projects and experience in backend, UI design, and performance optimization. Let's connect and discuss potential collaborations. Thank you for visiting!</p>
    </div>
    </div>
  )
}
