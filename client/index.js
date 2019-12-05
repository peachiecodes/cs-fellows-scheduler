import React, { Component } from 'react'
import ReactDOM from 'react-DOM';
import chroma from "chroma-js";
import styled, { css } from 'styled-components';

import Monday from './components/Day1-Monday.jsx'
import Tuesday from './components/Day2-Tuesday.jsx'
import Wednesday from './components/Day3-Wednesday.jsx'
import Thursday from './components/Day4-Thursday.jsx'
import Friday from './components/Day5-Friday.jsx'
import Saturday from './components/Day6-Saturday.jsx'
import ShiftTimes from './components/ShiftTimes.jsx'

export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(7, 0.13fr);
  grid-template-rows: repeat(50px, 9)
`

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem

  ${({ color = chroma.random() }) =>
    css`
      background-color: ${color}
      color: ${chroma.contrast(color, "black") >= 4 ? "black" : "white"}
      font-size: 18px
      font-weight: bold
    `}
`;

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  
  render() {
    return (
      <div>
        <Grid>
          <StyledColumn>
            <Item>
              <ShiftTimes />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Monday />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Tuesday />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Wednesday />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Thursday />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Friday />
            </Item>
          </StyledColumn>

          <StyledColumn>
            <Item>
              <Saturday />
            </Item>
          </StyledColumn >
        </Grid>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


