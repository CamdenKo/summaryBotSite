import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('app')
)
