import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
  background-color: #4e5b91;
  border-radius: 3px;
`;

const ThursdayRows = () => {
  const rows = [];
  for (let i = 0; i < 8; i += 1) {
    if (i === 5) rows.push(<center><p><StyledColumn><div id="row">THURSDAY ONLY</div></StyledColumn></p></center>)
    else rows.push(<center><p><StyledColumn><div id="row">weekday row</div></StyledColumn></p></center>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default ThursdayRows;