import React from 'react'
import { NavContainer, Navbarwrapper  , Container, NavTitle, Event, Linkswrapper} from './Style'
import Links from './Links'
import NavLinks from './NavLinks'
import NavItems from './NavItems'
export default function Navbar() {
  return (
    <Navbarwrapper>
    <Container>
    <NavContainer>
    <div>
    <NavTitle>New <Event>Event</Event></NavTitle>
    </div>
    <Linkswrapper>
    <NavItems></NavItems>
    
    </Linkswrapper>
    </NavContainer>
    </Container>
    </Navbarwrapper>
   
  )
}
