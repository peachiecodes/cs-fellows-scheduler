import React, { Component } from 'react';

const TimesAsRows = () => {
  // const rows = [];
  // for (let i = 0; i < 8; i += 1) {
  //   rows.push(<div id="row"><h4>Hi, I am a shift row!</h4></div>)
  // }
  return (
    <div>
      <p>
        <div id="row">
          <font color="powderblue">Approach: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">9am - 430am: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">Engineering: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
      <p>
        <div id="row">
          <font color="powderblue">OFF: </font>
          <span contentEditable="true">Click</span>
        </div>
      </p>
    </div>
  )
}

export default TimesAsRows;