import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';

// components
import App from './views/App'

// theme
import theme from './styled-components/theme'

// style
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();