import { BigNumber, type BigNumberish } from 'ethers'
import axios from 'axios'
import { getChainId } from '../../../../../utils/getChainId'
import { type GetQuotePriceFunction } from '../../../../../utils/types/quotePrice'
// DOC is located here : https://docs.1inch.io/docs/aggregation-protocol/api/swagger

const oneInchAPI = axios.create({
  baseURL: 'https://api.1inch.io/v5.0/'
})

export const getQuotePrice: GetQuotePriceFunction = async (
  tokenIn: string,
  amount: BigNumberish,
  tokenOut: string,
  chain: string
): Promise<BigNumber> => {
  const chainId = getChainId(chain)
  const quote = await oneInchAPI.get(`${chainId}/quote`, {
    params: {
      fromTokenAddress: tokenIn,
      toTokenAddress: tokenOut,
      amount: amount.toString()
    }
  })

  return BigNumber.from(quote.data.toTokenAmount)
}
