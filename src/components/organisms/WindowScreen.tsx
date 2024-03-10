import React from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'

const WindowScreenContainer = styled.div`
    width:40rem;
    height:32rem;
    border-radius:0.5rem;
    overflow:hidden;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position:absolute;
    right:0;
`

function WindowScreen({setWindowOpen}){
    
  return (
    <WindowScreenContainer>
        <WindowHeader setWindowOpen={setWindowOpen}/>
    </WindowScreenContainer>
    )
};

export default WindowScreen