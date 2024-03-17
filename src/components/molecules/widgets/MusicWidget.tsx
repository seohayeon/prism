import React from "react";
import styled from 'styled-components'
import {ReactComponent as PlayIcon} from "../../../assets/icons/play.svg";
import {ReactComponent as PauseIcon} from "../../../assets/icons/pause.svg";
import {ReactComponent as BackwardIcon} from "../../../assets/icons/prev.svg";
import {ReactComponent as ForwardIcon} from "../../../assets/icons/skip.svg";


const MusicWidgetContainer = styled.div`
    width:100%;
    height:8rem;
    background:white;
    border-radius:0.5rem;
    
    background: rgba( 255, 255, 255, 0.5 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const ArtworkContainer=styled.div`
    width:4rem;
    height:4rem;
    overflow:hidden;
    border-radius:0.5rem;
    position:relative;
    object-fit:cover;
    float:left;
    margin:0.5rem;
`
const ArtworkImg = styled.img`
    width:100%;
    height:100%;
    position:absolute;
`
const MusicInfo = styled.div`
    margin:0.5rem;
`
const TitleContainer=styled.div`
    font-weight:700;
`
const ArtistContainer=styled.div``
const Progress=styled.div`
    width:calc(100% - 1.5rem);
    height:0.4rem;
    background:rgba(0,0,0,0.2);
    margin:0 auto;
    overflow:hidden;
    border-radius:1rem;
`
const ProgressBar=styled.div`
    height:100%;
    width:30%;
    background:rgba(0,0,0,0.2);
`
const Controller=styled.div`
    text-align:center;
    margin-top:0.3rem;
`

export default function MusicWidget(){
    const data = {
        title:'조각 구름',
        artist:'카더가든',
        cover:'https://image.bugsm.co.kr/album/images/350/206034/20603465.jpg'
    }
  return (
    <MusicWidgetContainer>
        <div style={{overflow:'hidden'}}>
        <ArtworkContainer>
            <ArtworkImg src={data.cover}/>
        </ArtworkContainer>
        <MusicInfo>
            <TitleContainer>{data.title}</TitleContainer>
            <ArtistContainer>{data.artist}</ArtistContainer>
        </MusicInfo>
        </div>
        <Progress>
            <ProgressBar/>
        </Progress>
        <Controller>
            <BackwardIcon width={28} height={28}/>
            <PlayIcon width={30} height={30} style={{marginLeft:'1.4rem',marginRight:'1.4rem'}}/>
            <ForwardIcon width={28} height={28}/>
        </Controller>
    </MusicWidgetContainer>
    )
};