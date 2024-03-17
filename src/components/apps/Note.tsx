import React,{useState} from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'


const AppContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
`
const NoteList = styled.div`
    width:13rem;
    overflow:scroll;
    height:100%;
`
const TextAreaContainer = styled.div`
    flex: 1 0 auto;
    overflow:scroll;
    height: 100%;
    background: url('/images/note/bg_white.png');
`
const TextArea = styled.textarea`
    background:transparent;
    width:calc(100% - 1rem);
    height:calc(100% - 1rem);
    border:none;
    padding:0.5rem;
    font-size:1.1rem;
    color:#4B4B4B;
    &:focus{
        outline:none;
    }
`
const NoteListElement = styled.div`
    width:calc(100% - 1rem);
    float:left;
    padding-top:0.5rem;
    margin:0 auto;
    border-radius:0.1rem;
    margin-bottom:0.2rem;
    padding:0.5rem;
    
    &:hover{
        background:#FBDE76;
        opacity:0.9;
    }
`
const Title = styled.div`
    font-weight:700;
    width:calc(100% - 1rem);
    font-size:1.1rem;
    text-overflow:ellipsis;
    overflow:hidden;
`
const PreviewContent = styled.div`
    white-space:nowrap;
    overflow:hidden;
    flex: 1 0 auto;
    text-overflow:ellipsis;
    overflow:ellipsis;
    width:4rem;
`
const NoteDate = styled.div`
    margin-right:0.5rem;
`
const NoteInfo = styled.div`
    width:100%;
    display:flex;
    padding-bottom:0.5rem;
`

export default function App({setWindowOpen}){
    const [noteList,setNoteList] = useState([{title:'Note1NotNote1Note1Note1e1Note1Note1',content:'hellow',date:new Date()},{title:'Note2',content:'hellow my nanhellow my nansjsj',date:new Date()},{title:'Note3',content:'hellow',date:new Date()},{title:'Note4',content:'hellow',date:new Date()},{title:'Note5',content:'hellow',date:new Date()},{title:'Note5',content:'hellow',date:new Date()},{title:'Note5',content:'hellow',date:new Date()},{title:'Note5',content:'hellow',date:new Date()}])
    
    return(
        <AppContainer>
            <NoteList>
                    <WindowHeader setWindowOpen={setWindowOpen}/>
                <div style={{height:'calc(100% - 2rem)',overflow:'scroll'}}>
                {
                    noteList.map(e=>
                        <NoteListElement>
                            <Title>{e.title}</Title>
                            <NoteInfo>
                                <NoteDate>{String(e.date?.getFullYear())?.substr(2, 2) }/{e.date?.getMonth()+1}/{e.date?.getDate()}</NoteDate>
                                <PreviewContent>{e.content}</PreviewContent>
                            </NoteInfo>
                        </NoteListElement>
                    )
                }
                </div>
            </NoteList>
            <TextAreaContainer>
                <TextArea/>
            </TextAreaContainer>
        </AppContainer>
        )
}