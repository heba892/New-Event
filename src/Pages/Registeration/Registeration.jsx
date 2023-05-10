import React from 'react'
import { Container, Formwrapper, Input, RegisterButton, Regitererapper, Text, Textone, Texttwo, Title } from './Style'

export default function Registeration() {
  return (
    <Regitererapper>
    <Container>
        <div style={{width: "40%"}}>
        <Title>Register Here</Title>
        <Textone>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reiciendis.</Textone>
        <Texttwo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reiciendis.</Texttwo>
        </div>
         <Formwrapper>
        <Input type='text' placeholder='fName'></Input>
        <Input type='text' placeholder='lName'></Input>
        <Input type='number' placeholder='phone'></Input>
        <Input type='email' placeholder='email'></Input>
        </Formwrapper> 
           
</Container>
<div style={{textAlign: "right" , marginTop:"3rem" , marginRight:"17rem"}}>
        <RegisterButton>Register</RegisterButton>
        </div>
      
    </Regitererapper>
  )
}
