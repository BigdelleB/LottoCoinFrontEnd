import React from 'react'
import styled from 'styled-components'

import { provider } from 'web3-core'
import useWallet from 'hooks/useWallet'
import { purchaseTicket, ExchangeTicket } from 'utils'

const HomeContainer: React.FC = () => {
  const {
    account,
    ethereum,
  }: {
    account: string | null | undefined
    ethereum: provider
  } = useWallet()

  const handlePurchase = async () => {
    if (account && ethereum) {
      await purchaseTicket(ethereum, account)
    }
  }
  const handleExchange = async () => {
    if (account && ethereum) {
      await ExchangeTicket(ethereum, account)
    }
  }
  return (
    <StyledContainer>
      <StyledButton onClick={handlePurchase}>Purchase</StyledButton>
      <StyledButton onClick={handleExchange}>Exchange</StyledButton>
    </StyledContainer>
  )
}

export default HomeContainer

const StyledButton = styled.button`
  color: white;
  background-color: #03c75e;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: #02bf5a;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  margin-right: 20px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
