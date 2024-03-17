import React,{useState} from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'

const AppContainer = styled.div`
    height:100%;
    width:100%;
    
`
const DayLlistElement  = styled.div`
    width:10rem;
    height:3rem;
    background:#fff;
    display: block;
    margin:0 auto;
    margin-top:1rem;
    border-radius:0.5rem;
    padding:1.5rem;
`
const DayTitle = styled.div`
    
`
const LeftDay = styled.div`
    
`
export default function App({dayList,setWindowOpen}){
    
    return(
        <AppContainer>
            <WindowHeader setWindowOpen={setWindowOpen}/>
            {
                dayList.map(e=>
                    <DayLlistElement>
                        <DayTitle>{e.name}</DayTitle>
                        <LeftDay></LeftDay>
                    </DayLlistElement>
                )
            }
        </AppContainer>
        )
}