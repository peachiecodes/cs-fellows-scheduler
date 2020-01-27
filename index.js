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
  grid-template-rows: autofill;
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weekNumber: [1, 2, 3, 4, 5, 6] };
    
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    const week = [];
    for (let i = 0; i < this.state.weekNumber.length; i += 1) {
      week.push(<Week weekNumber={this.state.weekNumber[i]} />);
    }
    return (
      <div>
        {week}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));