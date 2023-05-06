import React from 'react'
import { Speakerswrapper } from "./Style"
export default function Overview({img,name,job, alt}) {
  return (
    <Speakerswrapper >
    <img src={img} alt={alt} width='100%'></img>
    <h2>{name}</h2>
    <span>{job}</span>
    </Speakerswrapper>
    
  )
}
