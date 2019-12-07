import React, { Component } from 'react';
import WeekdayRows from './WeekdayRows.jsx';
import styled from 'styled-components';

const StyledColumn = styled.div`
  border: 2px solid #26304a;
`;

const Monday = () => {
  return (
    <div>
        <center>
          <h3>
            <font color="#414c7a">
              Monday
              </font>
          </h3>
        </center>
      <WeekdayRows />
      </div>
  )
}

export default Monday;