import React from "react";
import styled from 'styled-components'
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg";
import DecimalDayActivity from  '../../apps/DecimalDay' 

const DDayWidgetContainer = styled.div`
    width:calc(100% - 0.1rem);
    height:9rem;
    background:white;
    margin-top:0.8rem;
    border-radius:1rem;
    
    background: #F8F8F8;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const DDayElement=styled.div`
    overflow:hidden;
    padding:0.5rem;
    font-size:1.05rem;
    font-weight:600;
`
const DDayName=styled.div`
    float:left;
`
const DDayDate=styled.div`
    float:right;
    color:#F55D65;
    font-size:1.08rem;
    font-weight:700;
`
const AddDay=styled.div`
    position:absolute;
    bottom:0.5rem;
    right:0.5rem;
    border-radius:50%;
    background:#4b4b4b;
    width:1.8rem;
    height:1.8rem;
    display:flex;
    align-items:center;
    justify-content:center;
`
export default function DDayWidget({setWindowOpen}){
    const data=[{name:'📌 3덮',date:new Date(2024,2,23)},{name:'📃 수능',date:new Date(2024,10,15)}]
  return (
    <DDayWidgetContainer>
        <AddDay onClick={()=>setWindowOpen(<DecimalDayActivity dayList={data} setWindowOpen={setWindowOpen}/>)}><PlusIcon width={20} height={20} fill='#fff'/></AddDay>
        {
            data.map(e=>
                <DDayElement>
                    <DDayName>{e.name}</DDayName>
                    <DDayDate>D-{leftDay(e.date)}</DDayDate>
                </DDayElement>
            )
        }
    </DDayWidgetContainer>
    )
};

function leftDay(targetDate){
    var today = new Date();
    var timeDiff = targetDate.getTime() - today.getTime();
    
    var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return daysLeft

}