import React,{useState} from "react";
import styled from 'styled-components'
import SideScreen from '../organisms/SideScreen'
import MainScreen from '../organisms/MainScreen'
import WindowScreen from '../organisms/WindowScreen'

const LayoutHomeContainer = styled.div`
    display:flex;
    align-items:flex-start;
    align-content:flex-start;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
`

function Home(){
    const [windowOpen,setWindowOpen] = useState(false)
  return (
    <LayoutHomeContainer>
        <SideScreen/> 
        <MainScreen setWindowOpen={setWindowOpen}/>
        {windowOpen&&<WindowScreen setWindowOpen={setWindowOpen}/>}
    </LayoutHomeContainer>
    )
};


export default Home