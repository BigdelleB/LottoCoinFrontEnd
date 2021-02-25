import BigNumber from 'utils/bignumber'

export interface ContextValues {
  ethBalance?: BigNumber
  lttBalance?: BigNumber
  daiBalance?: BigNumber
  usdcBalance?: BigNumber
  gameId?: string
}
