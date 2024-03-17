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
const MusicContainer = styled.div`
    flex: 1 0 auto;
    overflow:scroll;
    background:white;
    height:100%;
`
const PlayListElement = styled.div`
    width:calc(100% - 0.6rem);
    &:hover{
        background:#1691F1;
        opacity:0.9;
        color:white;
    }
    padding:0.3rem;
    margin-top:0.5rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`


export default function App({setWindowOpen}){
    const playList=[{id:'1',name:'졸릴때 '},{id:2,name:'뉴진스'},{id:3,name:'해피한해피한해피한해피한해피한 음악들 추언'}]
    return(
        <AppContainer>
            <Side>
                <WindowHeader setWindowOpen={setWindowOpen}/>
                <div style={{fontSize:'1.6rem',padding:'0.3rem',fontWeight:'700'}}>음악</div>
                {
                    playList.map(e=>
                        <PlayListElement>{e.name}</PlayListElement>
                    )
                }
            </Side>
            <MusicContainer>
                
            </MusicContainer>
        </AppContainer>
        )
}