import React, { useState } from 'react'
import { Line, Span, Wrapper } from './Style'
import { tab1, tab2, tab3 } from '../../design-system/components/OurPrograms/ProgramsData';
import Ourprograms from '../../design-system/components/OurPrograms/Ourprograms';
import theme from '../../design-system/config';

export default function Tabs() {
    const [tab , setTab] = useState("tab1");

    const switctab = (tab)=>{
        setTab(tab)
    }
  return (
    <>
    <Wrapper >
    <Span onClick={()=> switctab("tab1")}
    style={{ color: tab === "tab1" ? theme.primary : "" , borderBottom : tab === "tab1" ? ` 1px solid ${theme.black}` : "" }}
    >First Day</Span>
    <Span onClick={()=> switctab("tab2")} 
    style={{ color: tab === "tab2" ? theme.primary : "" , borderBottom : tab === "tab2" ? ` 1px solid ${theme.black}` : "" }}
    >Second Day</Span>
    <Span onClick={()=> switctab("tab3")}
    style={{ color: tab === "tab3" ? theme.primary : "" , borderBottom : tab === "tab3" ? ` 1px solid ${theme.black}` : "" }}
    >Third Day</Span>
    </Wrapper>
    <Line></Line>

    {tab === "tab2" ?
tab2.map((item)=>{
    return (
        <Ourprograms 
        name={item.name}
        image={item.image}
        time={item.time}
        roomNumber={item.roomNumber}
        description={item.description}
        alt={item.alt}
        title={item.title}
        key={item.id} ></Ourprograms>
    )
}) : tab === "tab3" ?
tab3.map((item)=>{
    return (
        <Ourprograms 
        name={item.name}
        image={item.image}
        time={item.time}
        roomNumber={item.roomNumber}
        description={item.description}
        alt={item.alt}
        title={item.title}
        key={item.id} ></Ourprograms>
    )
}) : tab1.map((item)=>{
    return (
        <Ourprograms 
        name={item.name}
        image={item.image}
        time={item.time}
        roomNumber={item.roomNumber}
        description={item.description}
        alt={item.alt}
        title={item.title}
        key={item.id} ></Ourprograms>
    )
})
} 
    
    </>
    
  )
}
