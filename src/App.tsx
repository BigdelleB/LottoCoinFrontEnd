import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import About from 'views/About'
import Home from 'views/Home'
import TopBar from 'components/TopBar'
import Provider from './provider'

function App() {
  return (
    <Router>
      <Provider>
        <StyledBackgroundDiv>
          <TopBar />
          <Switch>
            <Route exact path='/'>
              <Home title={'Lotto - Home'} />
            </Route>
            <Route exact path='/about'>
              <About title={'Lotto - About'} />
            </Route>
          </Switch>
        </StyledBackgroundDiv>
      </Provider>
    </Router>
  )
}

const StyledBackgroundDiv = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`

export default App
