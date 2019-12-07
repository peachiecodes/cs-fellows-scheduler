import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  background-color: #4e5b91;
  border-radius: 3px;
`;

const StyledNA = styled.div`
  background-color: grey;
  border-radius: 3px;
`;

const WeekdayRows = () => {
  const rows = [];
  for (let i = 0; i < 8; i += 1) {
    if (i === 5) rows.push(<center><p><StyledNA><div id="row">‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</div></StyledNA></p></center>)
    else rows.push(
      <center>
        <p>
          <StyledColumn>
            {/* FYI: invisible space between div tags */}
            <div id="row">
               ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
            </div>
          </StyledColumn>
        </p>
      </center>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default WeekdayRows;