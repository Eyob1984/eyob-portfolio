import React from 'react'
import image from './asset/image/background.jpg'

export default function Main() {

  return (
    <div style={{width: '100vw', height: '100vh', backgroundImage:`url(${image})` }}>
      <p> Hello, I am Eyob Tamir</p>
    </div>
  )
}
