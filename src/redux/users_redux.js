import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchUsers: null,
  fetchUsersSuccess: ['payload'],
  fetchUsersFailure: ['payload'],
  reset: null,
})

export const UsersTypes = Types;
export default Creators;

/* ------------- Initial state ------------- */

export const INITIAL_STATE = Immutable({
  list: null,
  fetching: false,
  error: null,
})

/* ------------- REDUCERS -------------------- */

export const fetchUsersRequest = (state) => {
  return state.merge({ fetching: true })
}

export const fetchUsersRequestSuccess = (state, { payload }) => {
  return state.merge({
    list: payload,
    fetching: false,
    error: null,
  })
}

export const fetchUsersRequestFailure = (state, { payload }) => {
  return state.merge({
    ...state,
    fetching: false,
    error: payload,
  })
}

export const resetGame = () => {
  return INITIAL_STATE
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_USERS]: fetchUsersRequest,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersRequestSuccess,
  [Types.FETCH_USERS_FAILURE]: fetchUsersRequestFailure,
  [Types.RESET]: resetGame,
})
