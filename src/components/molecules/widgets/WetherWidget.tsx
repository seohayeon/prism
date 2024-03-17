import React,{useEffect,useState} from "react";
import styled from 'styled-components'
import { WeatherApi,WeatherIcon } from '../../../util/weather'


const WeatherWidgetContainer = styled.div`
    width:8.6rem;
    height:8.6rem;
    background:white;
    margin-top:0.8rem;
    border-radius:1.2rem;
    float:left;
    position:relative;
    background: rgb(37,144,216);
    background: linear-gradient(180deg, rgba(37,144,216,1) 0%, rgba(82,165,219,1) 100%);
    ${({bg})=>bg}
    color:white;
`
const City=styled.div`
    font-size:0.8rem;
`
const Temperature=styled.div`
    font-size:2.5rem;
    line-height:2rem;
`
const Weather=styled.div`
    font-size:0.85rem;
`
const Highest=styled.span`
    float:left;
    margin-right:0.5rem;
    font-size:0.8rem;
    
`
const Lowest=styled.span`
    font-size:0.8rem;
`
const WeatherIconImg=styled.img`
    position:absolute;
    width:100%;
    height:100%;
`
const WeatherIconDiv=styled.div`
    width:1.5rem;
    height:1.5rem;
    overflow:hidden;
    position:relative;
    margin-top:0.1rem;
    margin-bottom:0.1rem;
`

export default function WeatherWidget(){
    const [data,setData] = useState({
                city:'-',
                temperature:'-',
                weather:'-',
                icon:null,
                highest:'',
                lowest:''
            })
    useEffect(()=>{
        WeatherApi().then((result)=>{
            const trimData = {
                city:'서울',
                temperature:Math.floor(result?.main?.temp),
                weather:result?.weather[0]?.description,
                icon:result?.weather[0]?.icon,
                highest:Math.floor(result?.main?.temp_max),
                lowest:Math.floor(result?.main?.temp_min)
            } 
            setData(trimData)
           // alert(JSON.stringify(result))
        })
        
    },[])
    
  return (
    <WeatherWidgetContainer bg={WeatherIcon[data.icon]?.color}>
        <div style={{margin:'0.5rem'}}>
            <City>{data?.city}</City>
            <Temperature>{data?.temperature}°</Temperature>
            
            <div style={{position: 'absolute',bottom: '0.5rem'}}>
            <WeatherIconDiv>
                <WeatherIconImg src={`/images/weather/${WeatherIcon[data.icon]?.path}.png`}/>
            </WeatherIconDiv>
            <Weather>{data?.weather}</Weather>
            <div style={{overflow:'hidden',fontSize:'0.8rem'}}>
                <span>최고:{data?.highest}° &nbsp;</span>
                <span>최저:{data?.lowest}°</span>
            </div>
            </div>
        </div>
    </WeatherWidgetContainer>
    )
};

