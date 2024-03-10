import React,{useState} from "react";
import styled from 'styled-components'

const MainScreenContainer = styled.div`
    width:40rem;
    height:auto;
    border-radius:0.5rem;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap:0.5rem;
    grid-auto-rows: minmax(0, 1fr);
`
const App = styled.div`
    aspect-ratio: 1;
    margin-top:1rem;
`
const AppIcon = styled.div`
    width:5rem;
    height:5rem;
    position:relative;
    border-radius:0.5rem;
    overflow:hidden;
    margin:0 auto;
`
const AppName = styled.div`
    text-align:center;
    color:white;
`
const ImgIcon = styled.img`
    position:absolute;
    width:100%;
    height:100%;
`

const apps = [{name:'메시지',appId:'message'},{name:'메모장',appId:'note'},{name:'사진',appId:'photos'},{name:'음악',appId:'music'},{name:'설정',appId:'setting'}]

export default function MainScreen({setWindowOpen}){
    
  return (
    <MainScreenContainer>
        {
            apps.map(e=>
                <App>
                    <AppIcon onClick={()=>setWindowOpen(true)}>
                        <ImgIcon src={`/app_icon/${e.appId}.png`}/>
                    </AppIcon>
                    <AppName>{e.name}</AppName>
                  
                </App>
            )
        }
    </MainScreenContainer>
    )
};