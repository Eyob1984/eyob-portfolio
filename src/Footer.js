import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {

  const style = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  }
  return (
     <div className="text-center p-1 bg-dark" style={style}>
    <div class=" bg-dark p-1">
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-google"></i></a>
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-instagram"></i></a>
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-linkedin"></i></a>
    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi  bi-github"></i></a>
  </div>
  <p className='text-light'>© 2023 Copyright</p>
</div>
  )
}
