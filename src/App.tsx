import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Home from "./components/templates/Home";
import './App.css'
import './Calendar.css'
import {WallPaperProvider} from './context/WallPaperProvider'


function App(){
    const [initInfo,setInitInfo] = useState({})
    const initData = localStorage.getItem("initialize")
    
    useEffect((e)=>{
        if(initData) return
        const uuid = crypto.randomUUID();
        const initialize = JSON.stringify({
            deviceID:uuid,
            name:'익명유저',
            wallpaper:'/images/bg.jpg',
            profileImg:'https://i.stack.imgur.com/l60Hf.png'
        })
        localStorage.setItem("initialize",initialize);
        setInitInfo(initialize)
    },[])
    
  return (
      <WallPaperProvider>
      <div>
        <Home/>
      </div>
      </WallPaperProvider>
    )
};

export default App