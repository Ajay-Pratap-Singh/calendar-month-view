import React, { useRef } from 'react'
import { getDatesMatrix, shortWeekdays } from './utils';

const options = { month: "long" };
const Calendar = ({date}) => {
  const matrix = useRef(getDatesMatrix(date))
  return (
    <table>
      <tbody>
        <tr>
          <td colSpan={7}>{new Intl.DateTimeFormat("en-US", options).format(date) + ' ' + date.getFullYear()}</td>
        </tr>
        <tr>
          {shortWeekdays.map(days=><td key={days}>{days}</td>)}
        </tr>
      {matrix.current.map( (row,index) => <tr key={'11'+index}>{row.map((dateEle,ind)=><td className={date.getDate()===dateEle?'today':''} key={ind}>{dateEle?dateEle:''}</td>)}</tr>)}
      </tbody>
    </table>
  )
}

export default Calendar