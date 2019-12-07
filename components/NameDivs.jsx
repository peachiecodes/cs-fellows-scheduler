import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import chroma from 'chroma-js';
import Draggable, { DraggableCore } from 'react-draggable';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 0.08fr);
  grid-template-rows: repeat(9, 25px);
  grid-gap: 6px;
`

export const ItemJoel = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #fcc5c0;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemAriel = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #edb9b4;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemDave = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #e8aca7;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemRuth = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #d4948e;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemSam = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #cc908d;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemAlex = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #bd8582;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemAustin = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #a67c79;
      font-size: 15px;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: bold;
    `}
`;

export const ItemBrian = styled.div`
  display: flex;
  justify-content: center;
  padding: .1rem;
  border-radius: 3px;

  ${({ color = chroma.random() }) =>
    css`
      background-color: #946d6a;
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
          <Draggable {...dragHandlers}><ItemJoel><div>Joel</div></ItemJoel></Draggable>
          <Draggable {...dragHandlers}><ItemJoel><div>Joel</div></ItemJoel></Draggable>
          <Draggable {...dragHandlers}><ItemJoel><div>Joel</div></ItemJoel></Draggable>

          <Draggable {...dragHandlers}><ItemAriel><div>Ariel</div></ItemAriel></Draggable>
          <Draggable {...dragHandlers}><ItemAriel><div>Ariel</div></ItemAriel></Draggable>
          <Draggable {...dragHandlers}><ItemAriel><div>Ariel</div></ItemAriel></Draggable>


          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>
          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>
          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>
          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>
          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>
          <Draggable {...dragHandlers}><ItemDave><div>Dave</div></ItemDave></Draggable>

          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable>
          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable>
          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable >
          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable>
          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable>
          <Draggable {...dragHandlers}><ItemRuth><div>Ruth</div></ItemRuth></Draggable >

          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>
          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>
          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>
          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>
          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>
          <Draggable {...dragHandlers}><ItemSam><div>Sam</div> </ItemSam></Draggable>

          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>
          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>
          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>
          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>
          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>
          <Draggable {...dragHandlers}><ItemAlex><div>Alex</div></ItemAlex></Draggable>

          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable>
          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable>
          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable >
          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable >
          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable >
          <Draggable {...dragHandlers}><ItemAustin><div>Austin</div></ItemAustin></Draggable >

          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable>
          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable>
          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable >
          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable>
          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable>
          <Draggable {...dragHandlers}><ItemBrian><div>Brian</div></ItemBrian></Draggable >
        </Grid>
      </div>
    )
  }
}

export default NameDivs;
