import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import chroma from "chroma-js";
import styled, { css } from 'styled-components';

import Week from './components/Week.jsx'

export const peach = '#fcc5c0';
export const gray = '#'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-gap: 12px;
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

  ${({ color = chroma.random() }) =>
    css`
      background-color: grey;
      font-size: 13px;
      color: white;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
      /* border-radius: 3px; */
    `}
`;

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

// stores the person's divs
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return (
      <div>
        <h2>Week 1</h2>
        <Week />
        <h2>Week 2</h2>
        <Week />
        <h2>Week 3</h2>
        <Week />
        <h2>Week 4</h2>
        <Week />
        <h2>Week 5</h2>
        <Week />
        <h2>Week 6</h2>
        <Week />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));