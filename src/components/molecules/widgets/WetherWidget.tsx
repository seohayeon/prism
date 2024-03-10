import React from "react";
import styled from 'styled-components'


const WeatherWidgetContainer = styled.div`
    width:8.6rem;
    height:8.6rem;
    background:white;
    margin-top:0.8rem;
    border-radius:0.5rem;
    float:left;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const City=styled.div``
const Temperature=styled.div`
    font-size:2.5rem;
    line-height:2rem;
`
const Weather=styled.div``
const Highest=styled.div`
    float:left;
    margin-right:0.5rem;
    font-size:0.95rem;
`
const Lowest=styled.div`
    font-size:0.95rem;
`


export default function WeatherWidget(){
    const data = {
        city:'서울',
        temperature:'20',
        weather:'맑음',
        highest:'25',
        lowest:'13'
    }
  return (
    <WeatherWidgetContainer>
        <div style={{margin:'0.5rem'}}>
            <City>{data.city}</City>
            <Temperature>{data.temperature}°</Temperature>
            <Weather>{data.weather}</Weather>
            <div style={{overflow:'hidden'}}>
                <Highest>최고:{data.highest}°</Highest>
                <Lowest>최저:{data.lowest}°</Lowest>
            </div>
        </div>
    </WeatherWidgetContainer>
    )
};