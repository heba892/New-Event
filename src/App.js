import React from 'react'
import CreativeSpeaker from './design-system/components/CreativeSpeaker/CreativeSpeaker.jsx'
import spaekerData from './design-system/components/CreativeSpeaker/SpaekersData.jsx'
export default function App() {
  return (
    <div>

      <div style ={{display:"flex"}}>
      {spaekerData.map((item) => {
        return (
          <CreativeSpeaker name={item.name} img={item.img} alt={item.alt} job={item.job} key={item.id}></CreativeSpeaker>
        )
      })}

       
      </div>
    

    </div>
  )
}
