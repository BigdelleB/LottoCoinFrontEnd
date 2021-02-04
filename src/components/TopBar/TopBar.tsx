import React from 'react'

import { Container, Spacer } from 'react-neu'
import styled from 'styled-components'

import Nav from './components/Nav'
import WalletButton from './components/WalletButton'

const TopBar = () => {
  return (
    <StyledTopBar>
      <Container size='lg'>
        <StyledTopBarInner>
          <StyledNavWrapper>
            <Nav />
          </StyledNavWrapper>
          <StyledAccountButtonWrapper>
            <Spacer />
            <WalletButton />
          </StyledAccountButtonWrapper>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div``

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 200px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

export default TopBar
