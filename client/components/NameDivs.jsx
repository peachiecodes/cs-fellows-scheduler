import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

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

const NameDivs = () => {
  return (
    <div>
      {/* Joel */}
      <Grid>
        <Item><div>Joel</div></Item>
        <Item><div>Joel</div></Item>
        <Item><div>Joel</div></Item>


      {/* Ariel */}
        <Item><div>Ariel</div></Item>
        <Item><div>Ariel</div></Item>
        <Item><div>Ariel</div></Item>

      {/* Ruth */}
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
        <Item><div>Ruth</div></Item>
      {/* Dave */}
      <Item>
      <div>Dave</div>
      <div>Dave</div>
      <div>Dave</div>
      <div>Dave</div>
      <div>Dave</div>
      <div>Dave</div>
      <div>Dave</div>
      </Item>

      {/* Sam */}
      <Item>
      <div>Sam</div>
      <div>Sam</div>
      <div>Sam</div>
      <div>Sam</div>
      <div>Sam</div>
      <div>Sam</div>
      </Item>
    
      {/* Alex */}
      <Item>
      <div>Alex</div>
      <div>Alex</div>
      <div>Alex</div>
      <div>Alex</div>
      <div>Alex</div>
      <div>Alex</div>
      </Item>

      {/* Austin */}
      <Item>
      <div>Austin</div>
      <div>Austin</div>
      <div>Austin</div>
      <div>Austin</div>
      <div>Austin</div>
      <div>Austin</div>
      </Item>

      {/* Brian */}
      <Item>
      <div>Brian</div>
      <div>Brian</div>
      <div>Brian</div>
      <div>Brian</div>
      <div>Brian</div>
      <div>Brian</div>
      </Item>
      </Grid>
    </div>
  )
}

export default NameDivs;