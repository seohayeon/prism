import React,{useState} from "react";
import styled from 'styled-components'
import Calendar from '../molecules/Calendar'
import WindowHeader from '../molecules/WindowHeader'
import moment from 'moment';


const AppContainer = styled.div`
    height:calc(100% - 2rem);
    width:100%;
    display:flex;
`
const CalendarContainer = styled.div`
    width:55%;
    background:white;
`
const TodoContainer = styled.div`
    width:45%;
    background:white;
`
const TodoElement = styled.div`
    padding:0.5rem;
`
const Label = styled.div`
    background:${({color})=>color};
    width:1rem;
    height:1rem;
    border-radius:50%;
    margin-right:0.2rem;
`
const TodoTitle = styled.div`
`
const TodoTime = styled.div`
    color:gray;
`
const TodoInfo = styled.div`
    display:flex;
    align-items: center;
    margin-bottom:0.2rem;
`
export default function App({setWindowOpen}){
    const [value, onChange] = useState(new Date());
    const todoList = [{label:'green',title:'크리티컬포인트크리티컬포인트크리티컬포인트크리티컬포인트크리티컬포인트크리티컬포인트크리티컬포인트',startTime:new Date(),endTime:new Date()},{label:'purple',title:'기출 풀기',startTime:new Date(),endTime:new Date()}]
    return(
        <>
        <WindowHeader setWindowOpen={setWindowOpen}/>
        <AppContainer>
            <CalendarContainer>
                <Calendar/>
            </CalendarContainer>
            <TodoContainer>
                {
                    todoList.map(e=>
                        <TodoElement>
                            <TodoInfo>
                                <Label color={e.label}/>
                                <TodoTime>
                                {getTimeInfoStr(e.startTime,e.endTime)}
                                </TodoTime>
                            </TodoInfo>
                            <TodoTitle>{e.title}</TodoTitle>
                        </TodoElement>
                    )
                }
            </TodoContainer>
        </AppContainer>
        </>
        )
}

function getTimeInfoStr(start,end){
    const sh = start.getHours() 
    const eh = end.getHours() 
    const ampm_S = sh >= 12 ? 'PM' : 'AM';
    const ampm_E = eh >= 12 ? 'PM' : 'AM';
    return `${sh}:${start.getMinutes()} ${ampm_S==ampm_E?'':ampm_S}-${eh}:${end.getMinutes()}${ampm_E}`
}