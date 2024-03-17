import React from "react";
import styled from 'styled-components'
import CalendarActivity from  '../../apps/Calendar' 

const TodoWidgetContainer = styled.div`
    width:8.6rem;
    height:8.6rem;
    background:white;
    margin-top:0.8rem;
    border-radius:1rem;
    float:right;
    
    background: white;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`
const DayOfWeekBlock = styled.div`
    color:#E23940;
    font-size:0.9rem;
`
const DateBlock = styled.div`
    font-size:2rem;
    margin-top:-0.3rem;
`
const TodoElement = styled.div`
    margin-bottom:0.2rem;
    overflow:hidden;
    display:flex;
    align-items:center;
`
const Label = styled.div`
    width:0.28rem;
    height:0.9rem;
    float:left;
    margin-right:0.2rem;
`
const Content = styled.div`
    font-size:0.8rem;
`

const weekDayText = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']

export default function TodoWidget({setWindowOpen}){
    const data=[{content:'운동가기',date:new Date(),label:'purple'},{content:'단어암기',date:new Date(),label:'skyblue'}]
    const today = new Date()
  return (
    <TodoWidgetContainer onClick={()=>setWindowOpen(<CalendarActivity setWindowOpen={setWindowOpen}/>)}>
        <div style={{padding:'0.5rem'}}>
            <DayOfWeekBlock>{weekDayText[today.getDay()]}</DayOfWeekBlock>
            <DateBlock>{today.getDate()}</DateBlock>
            {
                data.map(e=>
                    <TodoElement>
                        <Label style={{background:e.label}}></Label>
                        <Content>{e.content}</Content>
                    </TodoElement>
                )
            }
        </div>
    </TodoWidgetContainer>
    )
};
