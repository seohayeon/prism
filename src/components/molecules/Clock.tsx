import React,{useState,useEffect} from "react";
import styled from 'styled-components'

const ClockContainer = styled.div`
    color:white;
    overflow:hidden;
    margin-bottom:0.5rem;
`
const ClockTime = styled.div`
    font-weight:700;
    font-size:2.4rem;
    margin-top:-0.5rem;
`
const ClockTimeDetail = styled.div`
    font-size:1.2rem;
`

const weekDayText = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const monthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


export default function Clock(){
    const [day,setDate] = useState(new Date())
    const MMSS = dateToMMSS(day)
    
  return (
    <ClockContainer>
        <ClockTime>{MMSS}</ClockTime>
            <ClockTimeDetail>{monthText[day.getMonth()]}, {weekDayText[day.getDay()]} {day.getDate()}
            </ClockTimeDetail>
    </ClockContainer>
    )
};

function dateToMMSS(day){
    const d = day
    let datetext = d.toTimeString();
    datetext = datetext.split(' ')[0];
    datetext = datetext.split(':');
    return `${datetext[0]}:${datetext[1]}`
}
