export const StableABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'redeemInC',
        type: 'uint256'
      }
    ],
    name: 'BurntStablecoins',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_capOnStableMinted',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_maxInterestsDistributed',
        type: 'uint256'
      }
    ],
    name: 'CapOnStableAndMaxInterestsUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_perpetualManager',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_sanToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_oracle',
        type: 'address'
      }
    ],
    name: 'CollateralDeployed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      }
    ],
    name: 'CollateralRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint64[]',
        name: '_xFee',
        type: 'uint64[]'
      },
      {
        indexed: false,
        internalType: 'uint64[]',
        name: '_yFee',
        type: 'uint64[]'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_type',
        type: 'uint8'
      }
    ],
    name: 'FeeArrayUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newFeeManager',
        type: 'address'
      }
    ],
    name: 'FeeManagerUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountForUserInStable',
        type: 'uint256'
      }
    ],
    name: 'MintedStablecoins',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_oracle',
        type: 'address'
      }
    ],
    name: 'OracleUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'name',
        type: 'bytes32'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: '_feesForSLPs',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: '_interestsForSLPs',
        type: 'uint64'
      }
    ],
    name: 'SLPsIncentivesUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newSanRate',
        type: 'uint256'
      }
    ],
    name: 'SanRateUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_poolManager',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_stocksUsers',
        type: 'uint256'
      }
    ],
    name: 'StocksUsersUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'name',
        type: 'bytes32'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'BASE_PARAMS',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'BASE_TOKENS',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'CORE_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'GOVERNOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'GUARDIAN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SLP',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'STABLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gain', type: 'uint256' }],
    name: 'accumulateInterest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'governor', type: 'address' }],
    name: 'addGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'agToken',
    outputs: [{ internalType: 'contract IAgToken', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'burner', type: 'address' },
      { internalType: 'address', name: 'dest', type: 'address' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'minCollatAmount',
        type: 'uint256'
      }
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'contract IPoolManager', name: '', type: 'address' }
    ],
    name: 'collateralMap',
    outputs: [
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      {
        internalType: 'contract ISanToken',
        name: 'sanToken',
        type: 'address'
      },
      {
        internalType: 'contract IPerpetualManager',
        name: 'perpetualManager',
        type: 'address'
      },
      {
        internalType: 'contract IOracle',
        name: 'oracle',
        type: 'address'
      },
      { internalType: 'uint256', name: 'stocksUsers', type: 'uint256' },
      { internalType: 'uint256', name: 'sanRate', type: 'uint256' },
      { internalType: 'uint256', name: 'collatBase', type: 'uint256' },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'lastBlockUpdated',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lockedInterests',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'maxInterestsDistributed',
            type: 'uint256'
          },
          { internalType: 'uint256', name: 'feesAside', type: 'uint256' },
          { internalType: 'uint64', name: 'slippageFee', type: 'uint64' },
          { internalType: 'uint64', name: 'feesForSLPs', type: 'uint64' },
          { internalType: 'uint64', name: 'slippage', type: 'uint64' },
          {
            internalType: 'uint64',
            name: 'interestsForSLPs',
            type: 'uint64'
          }
        ],
        internalType: 'struct SLPData',
        name: 'slpData',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint64[]',
            name: 'xFeeMint',
            type: 'uint64[]'
          },
          {
            internalType: 'uint64[]',
            name: 'yFeeMint',
            type: 'uint64[]'
          },
          {
            internalType: 'uint64[]',
            name: 'xFeeBurn',
            type: 'uint64[]'
          },
          {
            internalType: 'uint64[]',
            name: 'yFeeBurn',
            type: 'uint64[]'
          },
          {
            internalType: 'uint64',
            name: 'targetHAHedge',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'bonusMalusMint',
            type: 'uint64'
          },
          {
            internalType: 'uint64',
            name: 'bonusMalusBurn',
            type: 'uint64'
          },
          {
            internalType: 'uint256',
            name: 'capOnStableMinted',
            type: 'uint256'
          }
        ],
        internalType: 'struct MintBurnData',
        name: 'feeData',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'user', type: 'address' }
    ],
    name: 'convertToSLP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'governorList',
        type: 'address[]'
      },
      { internalType: 'address', name: 'guardian', type: 'address' },
      { internalType: 'address', name: '_agToken', type: 'address' }
    ],
    name: 'deploy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      },
      {
        internalType: 'contract IPerpetualManager',
        name: 'perpetualManager',
        type: 'address'
      },
      {
        internalType: 'contract IFeeManager',
        name: 'feeManager',
        type: 'address'
      },
      {
        internalType: 'contract IOracle',
        name: 'oracle',
        type: 'address'
      },
      {
        internalType: 'contract ISanToken',
        name: 'sanToken',
        type: 'address'
      }
    ],
    name: 'deployCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'user', type: 'address' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCollateralRatio',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getStocksUsers',
    outputs: [
      { internalType: 'uint256', name: '_stocksUsers', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'core_', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'user', type: 'address' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'minStableAmount',
        type: 'uint256'
      }
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'agent', type: 'bytes32' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManagerUp',
        type: 'address'
      },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManagerDown',
        type: 'address'
      }
    ],
    name: 'rebalanceStocksUsers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'governor', type: 'address' }],
    name: 'removeGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      },
      {
        internalType: 'contract ICollateralSettler',
        name: 'settlementContract',
        type: 'address'
      }
    ],
    name: 'revokeCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'oldGuardian', type: 'address' }],
    name: 'revokeGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_capOnStableMinted',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_maxInterestsDistributed',
        type: 'uint256'
      },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'setCapOnStableAndMaxInterests',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newCore', type: 'address' }],
    name: 'setCore',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: '_bonusMalusMint', type: 'uint64' },
      { internalType: 'uint64', name: '_bonusMalusBurn', type: 'uint64' },
      { internalType: 'uint64', name: '_slippage', type: 'uint64' },
      { internalType: 'uint64', name: '_slippageFee', type: 'uint64' }
    ],
    name: 'setFeeKeeper',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'newFeeManager', type: 'address' },
      { internalType: 'address', name: 'oldFeeManager', type: 'address' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'setFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'newGuardian', type: 'address' },
      { internalType: 'address', name: 'oldGuardian', type: 'address' }
    ],
    name: 'setGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: '_feesForSLPs', type: 'uint64' },
      {
        internalType: 'uint64',
        name: '_interestsForSLPs',
        type: 'uint64'
      },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'setIncentivesForSLPs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IOracle',
        name: '_oracle',
        type: 'address'
      },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'setOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint64', name: '_targetHAHedge', type: 'uint64' }
    ],
    name: 'setTargetHAHedge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      },
      { internalType: 'uint64[]', name: '_xFee', type: 'uint64[]' },
      { internalType: 'uint64[]', name: '_yFee', type: 'uint64[]' },
      { internalType: 'uint8', name: '_mint', type: 'uint8' }
    ],
    name: 'setUserFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'loss', type: 'uint256' }],
    name: 'signalLoss',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'agent', type: 'bytes32' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'poolManager', type: 'address' }
    ],
    name: 'updateStocksUsers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'burner', type: 'address' },
      { internalType: 'address', name: 'dest', type: 'address' },
      {
        internalType: 'contract IPoolManager',
        name: 'poolManager',
        type: 'address'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
