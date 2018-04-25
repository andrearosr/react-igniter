import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../redux'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware),
  )
  // const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga);

  return { store }
};
