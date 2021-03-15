import * as dotenv from "dotenv";
dotenv.config();

export const TEST_DEPLOYER_PK = process.env.TEST_DEPLOYER_PK;
export const TEST_ETH_RPC = process.env.TEST_ETH_RPC;
export const TEST_ETH_CHAIN_ID = process.env.TEST_ETH_CHAIN_ID;
export const TEST_PRIMARY_SOURCE = process.env.TEST_PRIMARY_SOURCE || "";
export const TEST_SECONDARY_SOURCE = process.env.TEST_SECONDARY_SOURCE || "";

export const STAGING_DEPLOYER_PK = process.env.STAGING_DEPLOYER_PK;
export const STAGING_ETH_RPC = process.env.STAGING_ETH_RPC;
export const STAGING_ETH_CHAIN_ID = process.env.STAGING_ETH_CHAIN_ID;

export const SYMBOLS = ["BTC"];

export const COINBASE_ADDRESS = "0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC";
export const OKEX_ADDRESS = "0x85615B076615317C80F14cBad6501eec031cD51C";
export const COINBASE_SANDBOX_ADDRESS = "0xD9F775d8351C13aa02FDC39080947c79e454cb19";
