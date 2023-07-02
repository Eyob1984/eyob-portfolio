import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {

  const style = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  }
  return (
     <div className="text-center p-3 bg-dark" style={style}>
    <p className='text-light'>© 2020 Copyright:</p>
    <a class="text-dark" href="#">Linkdine</a>
  </div>
  )
}
