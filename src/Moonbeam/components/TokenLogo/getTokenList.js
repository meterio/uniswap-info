// the Uniswap Default token list lives here
import axios from "axios"

export const DEFAULT_TOKEN_LIST_URL = 'https://raw.githubusercontent.com/meterio/token-list/master/generated/swap-tokens.json'
export const METER_TOKEN_LIST = 'https://raw.githubusercontent.com/meterio/token-list/master/generated/swap-tokens.json'


export var meter_token_list = {
    "name": "Voltswap Default List",
    "timestamp": "",
    "version": {
        "major": 1,
        "minor": 0,
        "patch": 0
    },
    "tags": {},
    "logoURI": "",
    "keywords": [
        "voltswap",
        "default",
        "meter"
    ],
    "tokens": [
        {
            "name": "Volt",
            "address": "0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0",
            "symbol": "VOLT",
            "decimals": 18,
            "chainId": 82,
            "logoURI": "https://raw.githubusercontent.com/meterio/token-list/master/data/VOLT/logo.png"
        },

    ]
}




async function getMeterTokenList() {
    var results = await axios.get(METER_TOKEN_LIST)

    var meterChainTokens = results.data.tokens.filter((token) => token.chainId === 82)
    results.data.tokens = meterChainTokens
    meter_token_list = results.data
}

getMeterTokenList()