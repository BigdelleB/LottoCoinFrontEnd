import React, { useCallback } from 'react'
import styled from 'styled-components'

import BigNumber from 'utils/bignumber'
import useWallet from 'hooks/useWallet'

import numeral from 'numeral'
import {
  Box,
  Button,
  ModalActions,
  ModalContent,
  ModalProps,
  ModalTitle,
  Separator,
} from 'react-neu'

import Modal from 'components/CustomModal'
import FancyValue from 'components/FancyValue'
import Split from 'components/Split'

import useBalances from 'hooks/useBalances'

import * as tokenAddresses from 'constants/ethContractAddresses'
import LottoImg from 'assets/lotto.png'

const WalletModal: React.FC<ModalProps> = ({ isOpen, onDismiss }) => {
  const { reset } = useWallet()
  const { lttBalance } = useBalances()

  const getDisplayBalance = useCallback((value?: BigNumber) => {
    if (value) {
      return numeral(value).format('0.00a')
    } else {
      return '--'
    }
  }, [])

  const handleSignOut = useCallback(() => {
    reset()
    onDismiss && onDismiss()
  }, [reset, onDismiss])

  return (
    <Modal isOpen={isOpen}>
      <StyledModalBody>
        <ModalTitle text='My Wallet' />
        <ModalContent>
          <Split>
            <Box row>
              <FancyValue
                icon={{
                  alt: 'Ltt',
                  src: LottoImg,
                }}
                link={`https://etherscan.io/address/${tokenAddresses.lttTokenAddress}`}
                label='Lotto balance'
                value={getDisplayBalance(lttBalance)}
              />
            </Box>
          </Split>
        </ModalContent>
        <Separator />
        <ModalActions>
          <Button onClick={onDismiss} text='Close' variant='secondary' />
          <Button onClick={handleSignOut} text='Sign Out' />
        </ModalActions>
      </StyledModalBody>
    </Modal>
  )
}

const StyledModalBody = styled.div`
  @media (max-width: 600px) {
    height: 100vh;
    overflow-y: scroll;
  }
`

export default WalletModal
