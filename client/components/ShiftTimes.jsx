import React, { Component } from 'react';
import TimesAsRows from './TimesAsRows.jsx';
import styled from 'styled-components';

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

const ShiftTimes = () => {
  return (
    <div>
        <h3>Shifts</h3>
        <TimesAsRows />
    </div>
  )
}

export default ShiftTimes;