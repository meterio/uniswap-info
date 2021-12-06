import React from 'react'
import ReactDOM from 'react-dom'
// import ReactGA from 'react-ga'
// import { isMobile } from 'react-device-detect'
import ThemeProvider, { GlobalStyle } from './Theme'
import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from './contexts/LocalStorage'
import TokenDataContextProvider, { Updater as TokenDataContextUpdater } from './contexts/TokenData'
import GlobalDataContextProvider from './contexts/GlobalData'
import PairDataContextProvider, { Updater as PairDataContextUpdater } from './contexts/PairData'
import ApplicationContextProvider from './contexts/Application'
import UserContextProvider from './contexts/User'
import App from './App'
import Theta from './Theta'

// initialize GA
// const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
// if (typeof GOOGLE_ANALYTICS_ID === 'string') {
//   ReactGA.initialize(GOOGLE_ANALYTICS_ID)
//   ReactGA.set({
//     customBrowserType: !isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
//   })
// } else {
//   ReactGA.initialize('test', { testMode: true, debug: true })
// }

function ContextProviders({ children }) {
  return (
    <LocalStorageContextProvider>
      <ApplicationContextProvider>
        <TokenDataContextProvider>
          <GlobalDataContextProvider>
            <PairDataContextProvider>
              <UserContextProvider>{children}</UserContextProvider>
            </PairDataContextProvider>
          </GlobalDataContextProvider>
        </TokenDataContextProvider>
      </ApplicationContextProvider>
    </LocalStorageContextProvider>
  )
}

function Updaters() {
  return (
    <>
      <LocalStorageContextUpdater />
      <PairDataContextUpdater />
      <TokenDataContextUpdater />
    </>
  )
}


function Meter() {

  return (
    <ContextProviders>
      <Updaters />
      <ThemeProvider>
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </ContextProviders>
  )
}


function Main() {

  const queryString = window.location.href.split('?')[1]
  let networkId = 'meter'



  if (queryString) {
    const [splitQueryString] = queryString.split('=')

    if (splitQueryString && splitQueryString === 'network') {
      [, networkId] = queryString.split('=')

      if (networkId && networkId === 'theta') {
        window.localStorage.setItem('chainId', '361')

        return <Theta />
      }

      if (networkId && networkId === 'meter') {



        window.localStorage.setItem('chainId', '82')
        return <Meter />
      }
    }
  }



  let selected_network = window.sessionStorage.getItem("chainId")





  if (!selected_network) {




    return (
      <Meter />
    )

  }

  if (selected_network === '82') {
    // urlParams.set('network', 'meter');

    // window.location.search = urlParams
    return <Meter />
  }

  if (selected_network === '361') {
    // urlParams.set('network', 'theta');

    // window.location.search = urlParams
    return <Theta />
  }

}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
