import styled from "@emotion/styled";
import Contact from "../../shared/Header/contact-bg.jpg"
import theme from "../../design-system/config";

export const ContactUswrapper = styled("section")`
lable:ContactUswrapper;
background-size: cover;
background-repeat: no-repeat;
padding: 20px 0;
background: url(${Contact}) ;

`
export const Container = styled("div")`
lable:Container;
width: 80%;
margin: auto;
`


export const Wrapper = styled("div")`
lable:wrapper;
display: flex;
align-items: center;
justify-content: space-around;
`
export const H2 = styled("h2")`
lable:H2;
color: ${theme.primary};
`
export const P = styled("p")`
lable:P;
color: ${theme.gray};
line-height: 1.5;
`
export const DownloadButton = styled("button")`
lable:DownloadButton;
padding:1.1rem ;
background-color: ${theme.primary};
color: white;
border: none;
border-radius: 5px;
margin-top: 2rem;

`
export const SendNowButton = styled("button")`
lable:SendNowButton;
padding:1.1rem ;
background-color: ${theme.primary};
color: white;
border: none;
border-radius: 5px;
width: 30%;
`


export const Formwrapper = styled("div")`
lable:Formwrapper;
display: flex;
flex-direction: column;
width: 40%;
gap: 1.5rem;
background-color: white;
padding: 2rem;
border-radius: 20px;
margin-top: 1.5rem;
`
export const Input = styled("input")`
lable:Input;
gap: 1.5rem;
width: 80%;
padding: 1.1rem;
outline: none;
background-color: transparent;
color:black;
border-radius: 5px;
border: 1px solid #808080;



`