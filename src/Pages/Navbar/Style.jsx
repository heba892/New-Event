import styled from "@emotion/styled";
import theme from "../../design-system/config";

export const Navbarwrapper = styled("section")`
lable:Navbarwrapper;
background-color: ${theme.secondary};
padding: 1.5rem 0;
color: white;
`
export const Container = styled("div")`
lable:Container;
width: 80%;
margin: auto;
`
export const NavContainer = styled("div")`
lable:NavContainer;
display: flex;
justify-content:space-between;
align-items: center;
`

export const NavTitle = styled("div") `
lable:NavTitle;
font-size: 1.7rem;
`
export const Event = styled("span") `
lable:Event;
color: ${theme.primary};
`
export const Links = styled("a") `
lable:Links;
color: white;
text-decoration: none;
`
export const Linkswrapper = styled("div") `
lable:Linkswrapper;
display:flex;
align-items: center;
gap: 2rem;
`
