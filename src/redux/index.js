import { combineReducers } from 'redux'

import { reducer as users } from './users_redux'

export default combineReducers({
  users,
})
