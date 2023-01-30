/* eslint-disable @typescript-eslint/no-var-requires */
const SanPoolABI = require('../abi/SanToken.json');
const StakingABI = require('../abi/StakingPool.json');
const DistributorABI = require('../abi/Distributor.json');
const StableABI = require('../abi/StableMaster.json');
const ethers = require('ethers');
const { getNodeProvider } = require('../../../../utils/getNodeProvider');
const { toBnERC20Decimals } = require('../../../../utils/toBNTokenDecimals');

async function getSanPoolManager(poolAddress) {
  try {
    const provider = await getNodeProvider('ethereum');
    if (!provider) throw new Error('No provider was found.');
    const POOL = new ethers.Contract(poolAddress, SanPoolABI, provider);
    const poolManagerAddress = await POOL.poolManager();
    return poolManagerAddress;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/// invest
async function deposit(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = StableABI;
  const method_name = 'deposit';
  const poolManager = await getSanPoolManager(pool.pool_address);
  if (!poolManager) throw new Error('Angle pool manager was not found');
  const position_token = pool.underlying_tokens[0];
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [amountBN, addresses.userAddress, poolManager];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: pool.investing_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// redeem
async function redeem(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = StableABI;
  const method_name = 'withdraw';
  const poolManager11 = await getSanPoolManager(pool.pool_address);
  if (!poolManager11) throw new Error('Angle pool manager was not found');
  const position_token = pool.pool_address;
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [
    amountBN,
    addresses.receiverAddress,
    addresses.userAddress,
    poolManager11,
  ];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token,
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: pool.investing_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// stake
async function stake(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = StakingABI;
  const method_name = 'deposit(uint256,address)';
  const position_token = pool.pool_address;
  let args = [];
  let amountBN = '';
  if (pool.staking_address) {
    amountBN = await toBnERC20Decimals(
      amount.amount.humanValue,
      pool.chain,
      position_token
    );
    args = [amountBN, addresses.userAddress];
  } else {
    args = ['0', addresses.userAddress];
  }

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token,
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: pool.staking_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// unstake
async function unstake(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = StakingABI;
  const method_name = 'withdraw(uint256)';
  const position_token = pool.staking_address;
  let args = [];
  let amountBN = '';
  if (pool.staking_address) {
    amountBN = await toBnERC20Decimals(
      amount.amount.humanValue,
      pool.chain,
      position_token
    );
    args = [amountBN];
  } else {
    args = ['0'];
  }

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token,
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: pool.staking_address, // contract to interact with to interact with poolAddress
    amount: amountBN, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// claim
async function claimRewards(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = StakingABI;
  const method_name = 'claim_rewards(address)';
  const args = [addresses.userAddress];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: null,
    position_token_type: null, //token type to approve
    interaction_address: pool.staking_address, // contract to interact with to interact with poolAddress
    amount: null, //amount that will be use in the ERC20 approve tx of the position token is an ERC20 or that will be use as the 'value' of the transaction
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

module.exports = {
  deposit: deposit,
  deposit_and_stake: null,
  unlock: null,
  redeem: redeem,
  stake: stake,
  unstake: unstake,
  boost: null,
  unboost: null,
  claim_rewards: claimRewards,
  claim_interests: null,
};