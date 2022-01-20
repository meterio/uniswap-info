import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://geyser-graph-on-moonbeam.voltswap.finance/subgraphs/name/moonbeam/uniswap-v2-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://geyser-graph-on-moonbeam.voltswap.finance:8030/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://geyser-graph-on-moonbeam.voltswap.finance/subgraphs/name/moonbeam/uniswap-v2-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

//block client will be updated to http://18.141.138.134:8000/subgraphs/name/meter/blocks after an appreciable blocks sync
export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://geyser-graph-on-moonbeam.voltswap.finance/subgraphs/name/blocklytics/moonbeam-blocks'
  }),
  cache: new InMemoryCache()
})
