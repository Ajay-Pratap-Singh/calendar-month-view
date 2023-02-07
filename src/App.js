import React from 'react'
import './App.css';
import Calendar from './Calendar/Calendar';

const App = () => {
  return (
    <div className="App">
      <Calendar date = {new Date()}/>
    </div>
  )
}
export default App;
