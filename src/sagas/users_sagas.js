import { call, put } from 'redux-saga/effects'
import UsersActions from '../redux/users_redux'

export function* fetchUsers (api) {
  // Call API
  const response = yield call(api.getUsers)

  if (response.ok) {
    // Response is ok (apisauce magic)
    yield put(UsersActions.fetchUsersSuccess(response.data))
  } else {
    // Response failed
    // TODO tweak to capture failure message from server, if any
    yield put(UsersActions.fetchUsersFailure(response.problem))
  }
}
