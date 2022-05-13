export const TOTAL_RAISE = 30000;

export enum ChainID {
    BSC = 56,
    BSC_TESTNET = 97,

    AVAX = 0,
    AVAX_TESTNET = 43113,

    POLY = 0,
    POLY_TESTNET = 80001,

    FTM = 0,
    FTM_TESTNET = 4002,
}

export const CHAINS = [ChainID.BSC];

interface IContracts {
    [key: number]: { [key: string]: string };
  }

export const Contracts:IContracts = {
    [ChainID.BSC]: {
        UST: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
        LUNA: "0x156ab3346823B651294766e23e6Cf87254d68962",
        TEARS: "0x24c79b664846e63265C99fD239227DE2e239d8Fb",
        FAUCET: "0xFAa2351b07A67D43A73eB8a9442A895790E80d85",
    },
}

interface IContributionTokens {
    [key: number]: string[]
}
export const ContributionTokens:IContributionTokens = {
    [ChainID.BSC_TESTNET]: ["USDT", "USDC", "BUSD"],
    [ChainID.POLY_TESTNET]: ["USDT", "USDC", "BUSD"],
    [ChainID.AVAX_TESTNET]: ["USDT", "USDC", "BUSD"],
    [ChainID.FTM_TESTNET]: ["USDT", "USDC"],
}

interface IRpcUrls {
    [key: number]: string;
}

export const RpcUrls:IRpcUrls = {
    [ChainID.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    [ChainID.BSC]: 'https://bsc-dataseed.binance.org/',
    [ChainID.AVAX_TESTNET]: 'https://api.avax-test.network/ext/bc/C/rpc',
    //[ChainID.AVAX]: '',
    [ChainID.POLY_TESTNET]: 'https://matic-mumbai.chainstacklabs.com',
    //[ChainID.POLY]: '',
    [ChainID.FTM_TESTNET]: 'https://rpc.testnet.fantom.network/',
    //[ChainID.FTM]: '',

}

export const Networks:IRpcUrls = {
    [ChainID.BSC_TESTNET] : "BSC Testnet",
    [ChainID.POLY_TESTNET] : "Mumbai Testnet",
    [ChainID.AVAX_TESTNET] : "AVAX Testnet",
    [ChainID.FTM_TESTNET] : "FTM Testnet",
    [ChainID.BSC] : "BNB Chain Mainnet",
}

export const Explorers:IRpcUrls = {
    [ChainID.BSC_TESTNET] : "http://testnet.bscscan.com/",
    [ChainID.POLY_TESTNET] : "https://mumbai.polygonscan.com/",
    [ChainID.AVAX_TESTNET] : "https://testnet.snowtrace.io/",
    [ChainID.FTM_TESTNET] : "https://testnet.ftmscan.com/",
}

export const DEFAULT_CHAIN = ChainID.BSC;
