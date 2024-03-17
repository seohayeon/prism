import React,{useState,useEffect} from "react";
import styled from 'styled-components'
import WindowHeader from '../molecules/WindowHeader'
import {ReactComponent as SubmitIcon} from "../../assets/icons/submit.svg";


const AppContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:flex-start;
    align-content:flex-start;
`
const Side = styled.div`
    width:38%;
    overflow:scroll;
    height:100%;
`
const ChatContainer = styled.div`
    display:flex;
    flex: 1 0 auto;
    background:white;
    height:100%;
    flex-direction: column;
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
const NoteListElement = styled.div`
    width:calc(100% - 1rem);
    float:left;
    padding-top:0.5rem;
    margin:0 auto;
    border-radius:0.1rem;
    margin-bottom:0.2rem;
    padding:0.5rem;
    
    &:hover{
        background:#1691F1;
        opacity:0.9;
        color:white;
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
    width:10rem;
`
const NoteDate = styled.div`
    margin-right:0.5rem;
`
const NoteInfo = styled.div`
    width:100%;
    display:flex;
    padding-bottom:0.5rem;
`
const ProfileImg = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    object-fit:cover;
`
const ProfileImgContainer = styled.div`
    width:3.5rem;
    height:3.5rem;
    position:relative;
    overflow:hidden;
    float:left;
    border-radius:50%;
`
const ChatBlock=styled.div`
    overflow:hidden;
    margin-top:0.8rem;
    width:100%;
    display:block;
`
const SendBubble=styled.div`
    padding:0.5rem;
    background:#1691F1;
    display:inline-block;
    float:right;
    margin-right:0.5rem;
    border-radius:0.5rem;
    color:white;
`
const ReceivedBubble=styled.div`
    padding:0.5rem;
    background:#e2e2e2;
    display:inline-block;
    float:left;
    margin-left:0.5rem;
    border-radius:0.5rem;
`
const ChatInputContainer = styled.div`
    width:100%;
    display:flex;
    height:3.5rem;
    align-items:center;
`
const ChatInput = styled.input`
    width:calc(100% - 5rem);
    margin-left:0.8rem;
    display:block;
    border-radius:1rem;
    border:0.12rem solid #9E9E9E;
    height:1.5rem;
    padding-left:0.5rem;
    padding-right:0.5rem;
    &:focus{
        outline:none;
    }
    
`
const ChatLogContainer = styled.div`
    overflow:scroll;
    width:100%;
    flex: 1 0 auto;
    height:calc(100% - 3.5rem);
`
const SubmitBtn = styled.div`
    width:2rem;
    height:2rem;
    background:#1691F1;
    border-radius:50%;
    margin-left:0.5rem;
    line-height:2rem;
    text-align:center;
`
export default function App({setWindowOpen,socket}){
    const [rooms,setRooms]=useState([])
    const chatLogs = [{id:1,sender:'팜하니',type:'received',content:'하연아 안녕!'},{id:1,sender:'서하연',type:'send',content:'안녕!'},{id:1,sender:'팜하니',type:'received',content:'나 긴ㄴ 금발이야!'},{id:1,sender:'팜하니',type:'received',content:'너엄으 좋아!'},{id:1,sender:'팜하니',type:'received',content:'하연아 안녕!'},{id:1,sender:'서하연',type:'send',content:'안녕!'},{id:1,sender:'팜하니',type:'received',content:'나 긴ㄴ 금발이야!'},{id:1,sender:'팜하니',type:'received',content:'너엄으 좋아!'},{id:1,sender:'팜하니',type:'received',content:'하연아 안녕!'},{id:1,sender:'서하연',type:'send',content:'안녕!'},{id:1,sender:'팜하니',type:'received',content:'나 긴ㄴ 금발이야!'},{id:1,sender:'팜하니',type:'received',content:'너엄으 좋아!'},{id:1,sender:'팜하니',type:'received',content:'하연아 안녕!'},{id:1,sender:'서하연',type:'send',content:'안녕!'},{id:1,sender:'팜하니',type:'received',content:'나 긴ㄴ 금발이야!'},{id:1,sender:'팜하니',type:'received',content:'너엄으 좋아!'},{id:1,sender:'팜하니',type:'received',content:'하연아 안녕!'},{id:1,sender:'서하연',type:'send',content:'안녕!'},{id:1,sender:'팜하니',type:'received',content:'나 긴ㄴ 금발이야!'},{id:1,sender:'팜하니',type:'received',content:'너엄으 좋아!'}]
    
    useEffect(() => {
        socket.emit('get_roomlist',{})
        socket.getData('get_roomlist',function(data){
            setRooms(data)
            
        })
      }, [])
      
      
    
    return(
        <AppContainer>
            <Side>
                <WindowHeader setWindowOpen={setWindowOpen}/>
                <div style={{height:'calc(100% - 2rem)',overflow:'scroll'}}>
                {
                    rooms.map(e=>
                        <NoteListElement>
                            <ProfileImgContainer>
                                <ProfileImg src={e.profileImg}/>
                            </ProfileImgContainer>
                            <div style={{float:'left',marginLeft:'0.5rem'}}>
                            <Title>{e.name}</Title>
                            <NoteInfo>
                                <PreviewContent>{/*e.lastMsg*/}</PreviewContent>
                            </NoteInfo>
                            </div>
                        </NoteListElement>
                    )
                }
                </div>
            </Side>
            <ChatContainer>
                <ChatLogContainer>
                {
                    chatLogs.map(e=>
                        <ChatBlock>
                            {e.type=='received'?<ReceivedBubble>{e.content}</ReceivedBubble>
                            :<SendBubble>{e.content}</SendBubble>}
                        </ChatBlock>
                    )
                }
                </ChatLogContainer>
                <ChatInputContainer><ChatInput/><SubmitBtn><SubmitIcon style={{marginTop:'0.35em'}} width={16} height={16} fill='#fff'/></SubmitBtn></ChatInputContainer>
            </ChatContainer>
        </AppContainer>
        )
}