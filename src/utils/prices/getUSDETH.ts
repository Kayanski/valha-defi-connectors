import { config } from 'dotenv'
import axios from 'axios'
config()

export async function getUSDETH (): Promise<{ data: number, err: Error }> {
  try {
    const { data } = await axios.get(
      `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API_KEY}`
    )
    if (data.err) throw new Error(data.err)
    const result = data.result
    const exchangePrice = result.ethusd
    return { data: exchangePrice, err: null }
  } catch (err) {
    console.log(err)
    return { data: null, err }
  }
}
