import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'

/* ------------- Types ------------- */

import { UsersTypes } from '../redux/users_redux'

/* ------------- Sagas ------------- */

import { fetchUsers } from './users_sagas'

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root () {
  yield all([
    takeLatest(UsersTypes.FETCH_USERS, fetchUsers, api),
  ])
}
