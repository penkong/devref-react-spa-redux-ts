// import './Nunito/Nunito-Black.ttf'
// import './Nunito/Nunito-Light.ttf'
// import './Nunito/Nunito-SemiBold.ttf'
// import './Nunito/Nunito-SemiBold.ttf'
import './styles/index.css'

import GlobalStyles from './styles/global'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './App'
import { i18next } from './i18n'
import { store, persistor } from './store'
import { history, reportWebVitals } from './util'

// ---

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <ConnectedRouter noInitialPop history={history}>
              <React.StrictMode>
                <App />
                <GlobalStyles />
              </React.StrictMode>
            </ConnectedRouter>
          </BrowserRouter>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
