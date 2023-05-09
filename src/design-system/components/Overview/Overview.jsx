import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Overviewrapper ,  Title , Description} from './Style';

export default function OverviewComponent({icon , title , description}) {
  return (
    <Overviewrapper>
    <div>
    <FontAwesomeIcon color='tomato' size='2x' icon={icon}></FontAwesomeIcon>
    </div>
    <Title>{title}</Title>
    <Description>{description}</Description>

    </Overviewrapper>
  )
}
