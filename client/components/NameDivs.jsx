import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import Draggable, { DraggableCore } from 'react-draggable';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 0.09fr);
  grid-template-rows: repeat(9, 30px);
  grid-gap: 6px;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #fcc5c0;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

const StyledColumn = styled.div`
  border: 2px solid #26304a;
  border-radius: 3px;
`;

class NameDivs extends React.Component {
    state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };

    handleDrag = (e, ui) => {
      const { x, y } = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    };

    onStart = () => {
      this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
      this.setState({ activeDrags: --this.state.activeDrags });
    };

    // For controlled component
    adjustXPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const { x, y } = this.state.controlledPosition;
      this.setState({ controlledPosition: { x: x - 10, y } });
    };

    adjustYPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const { controlledPosition } = this.state;
      const { x, y } = controlledPosition;
      this.setState({ controlledPosition: { x, y: y - 10 } });
    };

    onControlledDrag = (e, position) => {
      const { x, y } = position;
      this.setState({ controlledPosition: { x, y } });
    };

    onControlledDragStop = (e, position) => {
      this.onControlledDrag(e, position);
      this.onStop();
    };
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <div>
        <Grid>
          <Draggable {...dragHandlers}><Item><div>Joel</div></Item></Draggable>
          <Item><div>Joel</div></Item>
          <Item><div>Joel</div></Item>

          <Item><div>Ariel</div></Item>
          <Item><div>Ariel</div></Item>
          <Item><div>Ariel</div></Item>


          <Item><div>Dave</div></Item>
          <Item><div>Dave</div></Item>
          <Item><div>Dave</div></Item>
          <Item><div>Dave</div></Item>
          <Item><div>Dave</div></Item>
          <Item><div>Dave</div></Item>


          <Item><div>Ruth</div></Item>
          <Item><div>Ruth</div></Item>
          <Item><div>Ruth</div></Item>
          <Item><div>Ruth</div></Item>
          <Item><div>Ruth</div></Item>
          <Item><div>Ruth</div></Item>

          <Item><div>Sam</div> </Item>
          <Item><div>Sam</div> </Item>
          <Item><div>Sam</div> </Item>
          <Item><div>Sam</div> </Item>
          <Item><div>Sam</div> </Item>
          <Item><div>Sam</div> </Item>

          <Item><div>Alex</div></Item>
          <Item><div>Alex</div></Item>
          <Item><div>Alex</div></Item>
          <Item><div>Alex</div></Item>
          <Item><div>Alex</div></Item>
          <Item><div>Alex</div></Item>

          <Item><div>Austin</div></Item>
          <Item><div>Austin</div></Item>
          <Item><div>Austin</div></Item>
          <Item><div>Austin</div></Item>
          <Item><div>Austin</div></Item>
          <Item><div>Austin</div></Item>

          <Item><div>Brian</div></Item>
          <Item><div>Brian</div></Item>
          <Item><div>Brian</div></Item>
          <Item><div>Brian</div></Item>
          <Item><div>Brian</div></Item>
          <Item><div>Brian</div></Item>
        </Grid>
      </div>
    )
  }
}

export default NameDivs;
