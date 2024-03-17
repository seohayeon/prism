import React,{useState} from "react";
import styled from 'styled-components'
import SideScreen from '../organisms/SideScreen'
import MainScreen from '../organisms/MainScreen'
import WindowScreen from '../organisms/WindowScreen'
import {useWallPaper} from '../../context/WallPaperProvider'



const LayoutHomeContainer = styled.div`
    display:flex;
    align-items:flex-start;
    align-content:flex-start;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    @media screen and (max-width: 58rem) {
        flex-direction:column;
    }
`
const Background = styled.div`
    width:100vw;
    height:100vh;
    background:url('${({background})=>background}');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`;

function Home(){
    const [windowOpen,setWindowOpen] = useState(false)
    const [wallpaper,_] = useWallPaper()
    
  return (
      <>
    <Background background={wallpaper}/>
    <LayoutHomeContainer>
        <SideScreen setWindowOpen={setWindowOpen}/> 
        <MainScreen setWindowOpen={setWindowOpen}/>
        {windowOpen&&<WindowScreen setWindowOpen={setWindowOpen} Activity={windowOpen}/>}
    </LayoutHomeContainer>
    </>
    )
};


export default Home