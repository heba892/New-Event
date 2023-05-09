import React from 'react'
import { Container, OverViewContainer, OverViewWrapper } from './Style'
import OverviewData from '../../design-system/Data'
import OverviewComponent from '../../design-system/components/Overview/Overview'
export default function OverView() {
  return (
    <OverViewWrapper>
    <Container>
    <OverViewContainer>
        {OverviewData.map((item) => {
        return(
            <OverviewComponent icon={item.icon} title={item.title} description={item.description} key={item.id}></OverviewComponent>

        )
        })}
    </OverViewContainer>
    
    </Container>
      
    </OverViewWrapper>
  )
}
