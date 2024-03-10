import React from "react";
import styled from 'styled-components'
import Clock from '../molecules/Clock'
import WidgetContainer from '../molecules/WidgetContainer'

const SideContainer = styled.div`
    width:18rem;
    height:32rem;
    margin-right:1rem;
    border-radius:0.5rem;
    display:flex;
    flex-direction: column;
`

function SideScreen(){
    
  return (
    <SideContainer>
        <Clock/>
        <WidgetContainer/>
    </SideContainer>
    )
};

export default SideScreen