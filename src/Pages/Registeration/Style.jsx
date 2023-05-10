import styled from "@emotion/styled";
import theme from "../../design-system/config";
import register from "../../shared/Header/register-bg.jpg"
export const Container = styled("div")`
lable:Container;
width: 80%;
margin: auto;
padding-top: 3rem;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
`
export const Regitererapper = styled("section")`
lable:Regitererapper;
background-size: cover;
background-repeat: no-repeat;
padding: 20px 0;
background: url(${register}) ;
height: 500px;


`
export const Title = styled("h1")`
lable:Title;
color: ${theme.primary};
font-size: 2rem;
font-weight: bold;

`
export const Textone = styled("p")`
lable:Textone;
color: ${theme.white};


`
export const Texttwo = styled("p")`
lable:Texttwo;
color: ${theme.gray};


`
export const Formwrapper = styled("div")`
lable:Formwrapper;
display: flex;
flex-direction: column;
width: 50%;
gap: 1.5rem;

`
export const RegisterButton = styled("button")`
lable:RegisterButton;
background-color: ${theme.primary};
padding: 15px 30px;
border: none;
border-radius: 5px;
color: white;
font-size: 1.5rem;
text-align: right;
:hover{
    background-color: white;
    color: ${theme.primary};
    
}
cursor: pointer;
`
export const Input = styled("input")`
lable:Input;
gap: 1.5rem;
width: 80%;
padding: 1.1rem;
outline: none;
border-radius: 5px;
background-color: transparent;
border: 2px solid ${theme.primary};
color:white

`
