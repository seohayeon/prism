import React,{ReactNode} from "react";
import styled from 'styled-components'


const WindowScreenContainer = styled.div`
    width:40rem;
    height:32rem;
    border-radius:0.5rem;
    overflow:hidden;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position:absolute;
    right:0;
    overflow:scroll;
`
interface Props{
    setWindowOpen:Function
    Activity?:ReactNode
}
function WindowScreen({setWindowOpen,Activity}:Props){
    
  return (
    <WindowScreenContainer>
        {Activity}
    </WindowScreenContainer>
    )
};

export default WindowScreen