import React from "react";
import styled from "styled-components";
import Home from "./components/templates/Home";
import './App.css'

const Background = styled.div`
    width:100vw;
    height:100vh;
    background:url('/images/bg.jpg');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`;

function App(){
  return (
      <>
      <Background/>
      <div>
        <Home/>
      </div>
      </>
    )
};

export default App