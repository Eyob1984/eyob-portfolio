import React, { useEffect, useState } from 'react'
import image from './asset/image/martin-sanchez-pX91vVDV6GQ-unsplash.jpg'
import data from './data/data.json'


export default function Main() {
const [alpha, setAlpha] = useState([])

  useEffect(() => {
    let index = 0;
    const profileData = data.profile[0].text
      const timer = setInterval(() => {
        if(index < profileData.length) {
          setAlpha(prev => [...prev, profileData[index]])
          index++
        } else {
          clearInterval(timer)
        }
        
      },10)

      return () => {
        clearInterval(timer)
      }

  },[])
   
  return (
    <div style={{width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundImage :`url(${image})` }}>
    <div style={{border: '1px solid white', width: '50%', height: '60%',}}>
      {alpha.map((ele, idx) => {
        return <span key={idx} style={{color: 'whitesmoke', fontFamily: 'monospace', fontSize: '20px'}}>{ele}</span>
      })}
    </div>
    </div>
  )
}
