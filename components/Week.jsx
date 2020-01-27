import React, { Component } from 'react'
import chroma from "chroma-js";
import styled, { css } from 'styled-components';

import Monday from './Day1-Monday.jsx'
import Tuesday from './Day2-Tuesday.jsx'
import Wednesday from './Day3-Wednesday.jsx'
import Thursday from './Day4-Thursday.jsx'
import Friday from './Day5-Friday.jsx'
import Saturday from './Day6-Saturday.jsx'

export const peach = '#fcc5c0';
export const gray = '#'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);

`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
      background-color: grey;
      font-size: 13px;
      color: white;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
`;

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

// stores the person's divs
const Week = () => {
  return (
    <div>
      <Grid>
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

export default Week;