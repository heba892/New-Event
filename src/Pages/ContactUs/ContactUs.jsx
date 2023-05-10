import React from 'react'
import { ContactUswrapper, Container, DownloadButton, Formwrapper, H2, Input, P, SendNowButton, Wrapper } from './Style'
import theme from '../../design-system/config'

export default function ContactUs() {
  return (
    <ContactUswrapper>
        <Container>
        <Wrapper>
            <div style={{width:"40%"}}>
            <H2>New Event</H2>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae.</P>
            <P>        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus harum iure facere, quas fugit voluptate. Laboriosam, reprehenderit maiores at excepturi quo eligendi numquam culpa veritatis magnam eos provident rem nisi.
</P>
                        <DownloadButton>Download</DownloadButton>

            </div>
        <Formwrapper>
        <h1 style={{color:`${theme.primary}`}}>Keep in touch</h1>
        <Input type='text' placeholder='fName'></Input>
        <Input type='email' placeholder='email'></Input>
        <Input type='text' placeholder='Message'></Input>
         <SendNowButton>Send Now</SendNowButton>

        </Formwrapper> 

        </Wrapper>

        

        </Container> 
   </ContactUswrapper>
  )
}
