import styled from "@emotion/styled";
import theme from "../../design-system/config";


export const Container = styled("div")`
lable:Container;
width: 80%;
margin: auto;

`
export const Footerwrapper = styled("footer")`
lable:Footerwrapper;
text-align: center;
padding: 3rem;


`
export const Span = styled("span")`
lable:Span;
color: ${theme.gray};
`
export const Heba = styled("span")`
lable:Heba;
color: ${theme.primary};
font-weight: bold;
`

export const Ul = styled("ul")`
lable:Ul;
display: flex;
justify-content: center;
align-items: center;
list-style: none;
`
export const Li = styled("li")`
lable:Li;
margin: 20px;
font-size: 1.5rem;
color: ${theme.primary};
cursor: pointer;
transition: .5s;
    padding: 10px;

:hover{
    color: white;
    background-color: ${theme.primary};
    border-radius: 50%;


}
`