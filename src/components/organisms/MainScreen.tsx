import React,{useState,useEffect} from "react";
import styled from 'styled-components'
import MessageActivity from '../apps/Message'
import SettingActivity from '../apps/Setting'
import NoteActivity from '../apps/Note'
import GalleryActivity from '../apps/Gallery'
import MusicActivity from '../apps/Music'
import CalendarActivity from '../apps/Calendar'
import {Socket} from '../../util/socket'

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

const weeks = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
export default function MainScreen({setWindowOpen}){
    
    const socket = new Socket()
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("initialize"))
        socket.emit('join',data)
    },[]) 
    
    const date = new Date()
    const apps = [{name:'메시지',appId:'message',activity:<MessageActivity setWindowOpen={setWindowOpen} socket={socket}/>},{name:'메모장',appId:'note',activity:<NoteActivity setWindowOpen={setWindowOpen}/>},{name:'사진',appId:'photos',activity:<GalleryActivity setWindowOpen={setWindowOpen}/>},{name:'음악',appId:'music',activity:<MusicActivity setWindowOpen={setWindowOpen}/>},{name:'설정',appId:'setting',activity:<SettingActivity setWindowOpen={setWindowOpen}/>}]
    
    
  return (
    <MainScreenContainer>
        {
            apps.map(e=>
                <App>
                    <AppIcon onClick={()=>setWindowOpen(e.activity)}>
                        <ImgIcon src={`/app_icon/${e.appId}.png`}/>
                    </AppIcon>
                    <AppName>{e.name}</AppName>
                  
                </App>
            )
        }
    </MainScreenContainer>
    )
};