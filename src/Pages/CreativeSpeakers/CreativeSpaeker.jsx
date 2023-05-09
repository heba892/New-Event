import React from 'react'
import { Container, CreativeSpaekerContainer, CreativeSpaekerWrapper } from './Style'
import Slider from './Slider'

export default function CreativeSpaeker() {
  return (
    <CreativeSpaekerWrapper>
    <h1>Creative Speakers</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <Container>
      <CreativeSpaekerContainer>
      <Slider></Slider>
      </CreativeSpaekerContainer>
      </Container>
    </CreativeSpaekerWrapper>
  )
}
