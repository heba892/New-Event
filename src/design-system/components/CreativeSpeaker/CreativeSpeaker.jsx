import React from 'react'
import { Img, Speakerswrapper } from "./Style"
export default function CreativeSpaekerComponent({img,name,job, alt}) {
  return (
    <Speakerswrapper >
    <Img src={img} alt={alt} width='100%'></Img>
    
    <h2>{name}</h2>
    <span>{job}</span>
    </Speakerswrapper>
    
  )
}
