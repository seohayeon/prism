import React from "react";
import styled from 'styled-components'
import MusicWidget from './widgets/MusicWidget'
import WetherWidget from './widgets/WetherWidget'
import DDayWidget from './widgets/DDayWidget'
import TodoWidget from './widgets/TodoWidget'



const WidgetContainer = styled.div`
    border-radius:0.5rem;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function WidgetBox({setWindowOpen}){
    
  return (
    <WidgetContainer>
        <MusicWidget/>
        <div style={{overflow:'hidden'}}>
        <WetherWidget/>
        <TodoWidget setWindowOpen={setWindowOpen}/>
        </div>
        <DDayWidget setWindowOpen={setWindowOpen}/>
    </WidgetContainer>
    )
};