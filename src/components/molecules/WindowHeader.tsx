import React from "react";
import styled from 'styled-components'

const WindowHeaderContainer = styled.div`
    padding:0.5rem;
    overflow:hidden;
    width:calc(100% - 1rem);
    
`
const CloseBtn = styled.div`
    width:1rem;
    height:1rem;
    background:#FF2B29;
    border-radius:50%;
    float:left;
`
const YellowBtn = styled.div`
    width:1rem;
    height:1rem;
    background:#FFCA00;
    border-radius:50%;
    float:left;
    margin-left:0.5rem;
    margin-right:0.5rem;
`
const GreenBtn = styled.div`
    width:1rem;
    height:1rem;
    float:left;
    background:#00CB22;
    border-radius:50%;
`

function WindowHeader({setWindowOpen}){
    
  return (
    <WindowHeaderContainer>
        <CloseBtn onClick={()=>setWindowOpen(false)}/>
        <YellowBtn/>
        <GreenBtn/>
    </WindowHeaderContainer>
    )
};

export default WindowHeader