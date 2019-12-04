import React, { Component } from 'react';

const ShiftRows = () => {
  const rows = [];
  for (let i = 0; i < 8; i += 1) {
    rows.push(<div id="row"><h4>Hi, I am a shift row!</h4></div>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default ShiftRows;