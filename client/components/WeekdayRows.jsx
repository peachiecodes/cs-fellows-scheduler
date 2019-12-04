import React, { Component } from 'react';

const WeekdayRows = () => {
  const rows = [];
  for (let i = 0; i < 8; i += 1) {
    rows.push(<div id="row"><h4>Hi, I am a weekday row!</h4></div>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default WeekdayRows;