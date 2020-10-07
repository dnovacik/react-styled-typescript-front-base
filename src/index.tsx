import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import Router from './router';
import Styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';

// theme
import theme from './theme/theme'

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const AppRoot = (): JSX.Element => {
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoot />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
