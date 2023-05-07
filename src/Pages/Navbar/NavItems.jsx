import React from 'react'
import Links from './Links'
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import theme from '../../design-system/config';

export default function NavItems() {
    const items = Links();
    const route = useLocation();
    
  return (
   items.map((link , index) => {
        return (
           
       <NavLinks NavLink = {link.NavLink} NavText ={link.NavText} key={index}
        color={route.pathname === link.NavLink? theme.active: theme.white }></NavLinks>
        
    
        )
    })
  )
}
