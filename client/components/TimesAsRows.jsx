import React, { Component } from 'react';

const TimesAsRows = () => {
  // const rows = [];
  // for (let i = 0; i < 8; i += 1) {
  //   rows.push(<div id="row"><h4>Hi, I am a shift row!</h4></div>)
  // }
  return (
    <div>
      <div id="row"><h4>9am - 6pm</h4></div>
      <div id="row"><h4>10am - 7pm</h4></div>
      <div id="row"><h4>10am - 7pm</h4></div>
      <div id="row"><h4>11am - 8pm</h4></div>
      <div id="row"><h4>11am - 8pm</h4></div>
      <div id="row"><h4>1pm - 10pm</h4></div>
      <div id="row"><h4>Engineering</h4></div>
      <div id="row"><h4>OFF</h4></div>
    </div>
  )
}

export default TimesAsRows;