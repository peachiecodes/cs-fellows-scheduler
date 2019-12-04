import React, { Component } from 'react'
import ReactDOM from 'react-DOM';

import Monday from './components/Day1-Monday.jsx'
import Tuesday from './components/Day2-Tuesday.jsx'
import Wednesday from './components/Day3-Wednesday.jsx'
import Thursday from './components/Day4-Thursday.jsx'
import Friday from './components/Day5-Friday.jsx'
import Saturday from './components/Day6-Saturday.jsx'
import ShiftTimes from './components/ShiftTimes.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ShiftTimes />
        <Monday />
        <Tuesday />
        <Wednesday />
        <Thursday />
        <Friday />
        <Saturday />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


