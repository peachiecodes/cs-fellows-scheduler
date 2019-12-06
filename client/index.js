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
import NameDivs from './components/NameDivs.jsx'

export const peach = '#fcc5c0';
export const gray = '#'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 0.11fr);
  /* grid-template-rows: repeat(9, 10px); */
  grid-gap: 2px;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

  ${({ color = chroma.random() }) =>
    css`
      background-color: ${color};
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

// stores the person's divs
let nameDivs = [];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('handlechange value: ', event.target.value)
    this.setState({ value: event.target.value.toUpperCase() });
  }

  // submits the value and produces 6 name divs
  handleSubmit(event) {
    // reset nameDiv so that no other name is produced other than the one that was submitted
    nameDivs = [];
    console.log('nameDivs has been reset!')
    event.preventDefault();
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

        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <NameDivs />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


