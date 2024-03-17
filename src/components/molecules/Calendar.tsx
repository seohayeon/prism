import React,{useState} from "react";
import useCalendar from '../../hooks/useCalendar'
import styles from './Calendar.module.css'

export default function Calendar(){
    const {weekCalendarList, currentDate, setCurrentDate} = useCalendar()
    const [select, setSelect] = React.useState<number>(new Date().getDate());
    const [month,setMonth] = React.useState<number>(new Date().getMonth());
    const date = new Date(new Date().getFullYear(),month,select)
    
    return(
        <>
        <table className={styles.calendarContainer}>
        <thead>
          <tr>
            <th style={{color:'#E25241'}}>SUN</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th style={{color:'#4994EF'}}>SAT</th>
          </tr>
        </thead>
        <tbody>
        {weekCalendarList.map((item) => (
            <tr className={styles.weekArr} key={Math.random()}>
              {item.map((day) => (
                <td
                  className={day==0?styles.emptyBlock:styles.dayBlock}
                  onClick={day!==0?() => {
                      setSelect(day)
                  }:null}
                  key={Math.random()}
                >
                  <div className={day==select?styles.selectedDate:styles.date}>{day==0?'':day}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </>
        )
}