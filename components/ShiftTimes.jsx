import React, { Component } from 'react';
import TimesAsRows from './ThursShifts.jsx/index.js.js';
import styled from 'styled-components';

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

const ShiftTimes = () => {
  return (
    <div>
      <center><h3><font color="#414c7a">Shifts</font></h3>
        </center><TimesAsRows />
    </div>
  )
}

export default ShiftTimes;