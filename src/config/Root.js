import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
import LandingScreen from '../containers/LandingScreen'

// const { store, persistor } = configureStore()
const { store } = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <Switch>
          <Route path="/" component={LandingScreen} exact />
        </Switch>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default Root
