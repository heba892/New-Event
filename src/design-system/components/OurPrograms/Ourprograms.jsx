import React from 'react'
import { Image, OurProgramwraper , Imagewraper, Iconwraper} from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'
export default function Ourprograms({image ,alt, time , roomNumber, name ,title, description}) {
  return (
    <OurProgramwraper>
    <Imagewraper>
    <Image src={image} alt={alt}></Image>
    </Imagewraper>
    <div>
    <Iconwraper>
        <div>
        <FontAwesomeIcon icon={faClock} size='sm' />{time} 
        </div>
     <div>
     <FontAwesomeIcon icon={faMapMarker} size='sm' />{roomNumber}
     </div> 
    </Iconwraper>
    <h2>{name}</h2>
    <span>{title}</span>
    <p>{description}</p>
      
    </div>
    
    </OurProgramwraper>
  )
}
