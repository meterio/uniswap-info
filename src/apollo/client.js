import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.voltswap.finance/subgraphs/name/meterio/uniswap-v2-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphhealth.meter.io/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphtest.meter.io/subgraphs/name/meterio/uniswap-v2-subgraph'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})



//block client will be updated to http://18.141.138.134:8000/subgraphs/name/meter/blocks after an appreciable blocks sync
export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
  }),
  cache: new InMemoryCache()
})
