import React,{useState} from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'


const AppContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:flex-start;
    align-content:flex-start;
`
const Side = styled.div`
    width:13rem;
    overflow:scroll;
    height:100%;
`
const SettingContainer = styled.div`
    flex: 1 0 auto;
    overflow:scroll;
`
const ImgElement = styled.div`
    background:white;
    aspect-ratio: 1; 
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    object-fit:cover;
`

export default function App({setWindowOpen}){
    
    return(
        <AppContainer>
            <Side>
                <WindowHeader setWindowOpen={setWindowOpen}/>
            </Side>
            <SettingContainer>
                
            </SettingContainer>
        </AppContainer>
        )
}