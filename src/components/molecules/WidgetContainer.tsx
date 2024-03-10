import React from "react";
import styled from 'styled-components'
import MusicWidget from './widgets/MusicWidget'
import WetherWidget from './widgets/WetherWidget'

const DDayWidget = styled.div`
    width:100%;
    height:8rem;
    background:white;
    margin-top:0.8rem;
    border-radius:0.5rem;
    
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const DarkModeWidget = styled.div`
    width:8.6rem;
    height:8.6rem;
    background:white;
    margin-top:0.8rem;
    border-radius:0.5rem;
    float:right;
    
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const WidgetContainer = styled.div`
    overflow:scroll;
    border-radius:0.5rem;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function WidgetBox(){
    
  return (
    <WidgetContainer>
        <MusicWidget/>
        <div style={{overflow:'hidden'}}>
        <WetherWidget/>
        <DarkModeWidget/>
        </div>
        <DDayWidget/>
    </WidgetContainer>
    )
};