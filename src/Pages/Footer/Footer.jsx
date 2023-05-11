import React from 'react'
import { Container, Footerwrapper, Heba, Li, Span, Ul } from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <Footerwrapper>
      <Container>
      <div>
      <Span>Copyright @ 2018 company , Desinged by <Heba>Heba Gamal</Heba>  </Span>
      </div>
      <Ul>
      <Li><FontAwesomeIcon icon={faFacebookF}/></Li>
      <Li><FontAwesomeIcon icon={faTwitter}/></Li>
      <Li><FontAwesomeIcon icon={faDribbble}/></Li>
      <Li><FontAwesomeIcon icon={faBehance}/></Li>

      </Ul>
      
      </Container>
    </Footerwrapper>
  )
}
