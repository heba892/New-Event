import React from 'react'
import { Links, Linkswrapper } from './Style'
export default function NavLinks({NavLink , NavText , color}) {
  return (
        <Links style={{color:color}} href={NavLink}>{NavText}</Links>

  )
}
