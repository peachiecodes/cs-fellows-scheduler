import React, { Component } from 'react';

const TimesAsRows = () => {
  // const rows = [];
  // for (let i = 0; i < 8; i += 1) {
  //   rows.push(<div id="row"><h4>Hi, I am a shift row!</h4></div>)
  // }
  return (
    <div>
      <div id="row">
        <p></p>
        <font color="pink">Approach: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">9am - 430pm: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">9am - 430am: </font>
        <span contentEditable="true" background-color="#414c7a">Click</span>
        </div>
      <div id="row">
        <p></p>
        <font color="darkgrey">Engineering: </font>
          <span contentEditable="true">Click</span>
        </div>
      <div id="row">
        <p></p>
          <font color="powderblue">OFF: </font>
          <span contentEditable="true">Click</span>
        </div>
    </div>
  )
}

export default TimesAsRows;