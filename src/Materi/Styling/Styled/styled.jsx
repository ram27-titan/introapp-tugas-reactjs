import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;

  border-color: salmon;
  color: salmon;
  border-radius: 10px;

  &:hover {
    background: salmon;
    color: white;
    border-radius: 20px;
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default class Styled extends React.Component {
  render() {
    return (
      <Container>
        <Button>Read More</Button>
      </Container>
    );
  }
}
