import React, { Component } from 'react';

const TimesAsRows = () => {
  // const rows = [];
  // for (let i = 0; i < 8; i += 1) {
  //   rows.push(<div id="row"><h4>Hi, I am a shift row!</h4></div>)
  // }
  return (
    <div>
      <p><div id="row"><font color="powderblue">Approach: </font></div></p>
      <p><div id="row"><font color="powderblue">9am - 6pm: </font></div></p>
      <p><div id="row"><font color="powderblue">10am - 7pm: </font></div></p>
      <p><div id="row"><font color="powderblue">10am - 7pm: </font></div></p >
      <p><div id="row"><font color="powderblue">11am - 8pm: </font></div></p >
      <p><div id="row"><font color="powderblue">1pm - 10pm: </font></div></p >
      <p><div id="row"><font color="pink">Engineering: </font></div></p>
      <p><div id="row"><font color="salmon">OFF: </font></div> </p>
    </div>
  )
}

export default TimesAsRows;