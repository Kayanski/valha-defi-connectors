/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const VaultABI = require('../abi/Vault.json');
const StakingABI = require('../abi/FairLaunch.json');
const { toBnERC20Decimals } = require('../../../../utils/toBNTokenDecimals');
const PID = require('./PID');

/// invest
async function deposit(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = VaultABI;
  const method_name = 'deposit';
  const position_token = pool.underlying_tokens[0];
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [amountBN];

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

/// unlock
async function unlock() {
  return {};
}

/// redeem
async function redeem(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const abi = VaultABI;
  const method_name = 'withdraw';
  const position_token = pool.pool_address;
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [amountBN];

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

/// stake
async function stake(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<InteractionsReturnObject> {
  const poolId = PID[pool.pool_address.toLowerCase()];
  const abi = StakingABI;
  const method_name = 'deposit';
  const position_token = pool.pool_address;
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [addresses.userAddress, poolId, amountBN];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: position_token, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: staking_address, // contract to interact with to interact with poolAddress
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
  const poolId = PID[pool.pool_address.toLowerCase()];
  const abi = StakingABI;
  const method_name = 'withdraw';
  const position_token = pool.pool_address;
  const amountBN = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    position_token
  );
  const args = [addresses.userAddress, poolId, amountBN];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: null, // token needed to approve
    position_token_type: null, //token type to approve
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
  const method_name = 'harvest';
  const poolId = PID[pool.pool_address.toLowerCase()];
  const args = [poolId];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: null,
    position_token_type: null,
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