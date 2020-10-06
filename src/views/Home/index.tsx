// libs
import React from 'react';
import Styled from 'styled-components';

export default () => {
  return (
    <Home.Layout>
      <Home.Title>Home</Home.Title>
    </Home.Layout>
  );
};

const Home = {
  Layout: Styled.div`
  display: flex;
  `,
  Title: Styled.h2`
  color: ${props => props.theme.colors.blue};
  `
}
