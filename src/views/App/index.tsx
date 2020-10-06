// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import Router from '../../router';
import Styled from 'styled-components';

export default () => {
  const router = useRoutes(Router);

  return (
    <App.Layout>
      {router}
    </App.Layout>
  );
};

const App = {
  Layout: Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.light['shade-1']};
  `
};