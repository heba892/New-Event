import React from 'react'
import { AboutUSwrapper, Container, Div, H1, P, Span } from './Style'
import aboutus from '../../shared/Header/overview-img.jpg'
export default function AboutUS() {
  return (
    <Container>
        <H1>About Us</H1>

    <AboutUSwrapper>
    <Div>
    <Span>
        Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ad nihil at id, ipsum dolorem eveniet vero ex laudantium quaerat!
    </Span>
    <P>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus harum iure facere, quas fugit voluptate. Laboriosam, reprehenderit maiores at excepturi quo eligendi numquam culpa veritatis magnam eos provident rem nisi.
    </P>
    </Div>
    <Div>
    <img width="100%" src={aboutus} alt='img'></img>
    </Div>
    </AboutUSwrapper>

    </Container>
  )
}
