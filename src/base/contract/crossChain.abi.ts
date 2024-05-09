export const CrossChainAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddr',
        type: 'address',
      },
    ],
    name: 'AddChannel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'srcChainId',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'dstChainId',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'oracleSequence',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'packageSequence',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'CrossChainPackage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isEnable',
        type: 'bool',
      },
    ],
    name: 'EnableOrDisableChannel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'value',
        type: 'bytes',
      },
    ],
    name: 'ParamChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'proposalTypeHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'quorum',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'expiredAt',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'contentHash',
        type: 'bytes32',
      },
    ],
    name: 'ProposalSubmitted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'packageType',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'packageSequence',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
    ],
    name: 'ReceivedPackage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'executor',
        type: 'address',
      },
    ],
    name: 'Reopened',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'executor',
        type: 'address',
      },
    ],
    name: 'Suspended',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'lowLevelData',
        type: 'bytes',
      },
    ],
    name: 'UnexpectedFailureAssertionInPackageHandler',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
    ],
    name: 'UnexpectedRevertInPackageHandler',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'packageSequence',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'UnsupportedPackage',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ACK_PACKAGE',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BSC_CHAIN_ID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BSC_TESTNET_CHAIN_ID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BUCKET_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BUCKET_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CANCEL_TRANSFER_PROPOSAL',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CROSS_CHAIN',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EMERGENCY_OPERATOR',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EMERGENCY_PROPOSAL_EXPIRE_PERIOD',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EMERGENCY_UPGRADE_OPERATOR',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EMPTY_CONTENT_HASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'FAIL_ACK_PACKAGE',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GNFD_EXECUTOR',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GNFD_EXECUTOR_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GOV_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GOV_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GROUP_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GROUP_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LIGHT_CLIENT',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_RELAY_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_SEQUENCE_CHANGE',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MULTI_MESSAGE',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MULTI_MESSAGE_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OBJECT_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OBJECT_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PERMISSION_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PERMISSION_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PROXY_ADMIN',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RELAYER_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REOPEN_PROPOSAL',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SUSPEND_PROPOSAL',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SYN_PACKAGE',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TOKEN_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_IN_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_OUT_CHANNEL_ID',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'batchSizeForOracle',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'callbackGasPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'attacker',
        type: 'address',
      },
    ],
    name: 'cancelTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'chainId',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'channelHandlerMap',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'channelReceiveSequenceMap',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'channelSendSequenceMap',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'attacker',
        type: 'address',
      },
    ],
    name: 'emergencyCancelTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'isOracleSequence',
        type: 'bool',
      },
      {
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: 'isSendSequence',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'isIncrease',
        type: 'bool',
      },
      {
        internalType: 'uint64',
        name: 'sequenceChange',
        type: 'uint64',
      },
    ],
    name: 'emergencyChangeSequence',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'emergencyProposals',
    outputs: [
      {
        internalType: 'uint16',
        name: 'quorum',
        type: 'uint16',
      },
      {
        internalType: 'uint128',
        name: 'expiredAt',
        type: 'uint128',
      },
      {
        internalType: 'bytes32',
        name: 'contentHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emergencyReopen',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emergencySuspend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'packageType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_relayFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_ackRelayFee',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'msgBytes',
        type: 'bytes',
      },
    ],
    name: 'encodePayload',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRelayFees',
    outputs: [
      {
        internalType: 'uint256',
        name: '_relayFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAckRelayFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gnfdChainId',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_multiMessagePayload',
        type: 'bytes',
      },
      {
        internalType: 'uint8',
        name: '_packageType',
        type: 'uint8',
      },
      {
        internalType: 'uint64',
        name: '_multiMessageSequence',
        type: 'uint64',
      },
    ],
    name: 'handleAckPackageFromMultiMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_payload',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_blsSignature',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: '_validatorsBitSet',
        type: 'uint256',
      },
    ],
    name: 'handlePackage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_gnfdChainId',
        type: 'uint16',
      },
      {
        internalType: 'bool',
        name: 'enableCrossChainTransfer',
        type: 'bool',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isSuspended',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minAckRelayFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracleSequence',
    outputs: [
      {
        internalType: 'int64',
        name: '',
        type: 'int64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'previousTxHeight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'quorumMap',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'registeredContractChannelMap',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'relayFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reopen',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'channelId',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: 'msgBytes',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: '_relayFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_ackRelayFee',
        type: 'uint256',
      },
    ],
    name: 'sendSynPackage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'suspend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'txCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'value',
        type: 'bytes',
      },
    ],
    name: 'updateParam',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'versionInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'version',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
] as const;
