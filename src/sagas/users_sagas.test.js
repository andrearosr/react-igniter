import { put, call } from 'redux-saga/effects'
import API from '../services/api'
import UsersActions from '../redux/users_redux'
import { fetchUsers } from './users_sagas'

const stepper = (fn) => (mock) => fn.next(mock).value
const api = API.create()

describe('Given the fetchUsers saga', () => {
  let response

  beforeAll(() => {
    return api.getUsers().then(res => {
      response = res
    })
  })

  it('first calls API', () => {
    const step = stepper(fetchUsers(api))

    expect(step()).toEqual(call(api.getUsers))
  })

  it('follows success path', () => {
    const step = stepper(fetchUsers(api))

    // first step (calls API)
    step()

    // second step (successful return)
    const stepResponse = step(response)

    // get the data out of the actual response
    const payload = response.data

    // stepResponse should equal fetchUsersSuccess action with data out of the actual response
    expect(stepResponse).toEqual(put(UsersActions.fetchUsersSuccess(payload)))
  })

  it('follows failure path', () => {
    const response = { ok: false, problem: 'SERVER_ERROR' }
    const step = stepper(fetchUsers(api))

    // first step (calls API)
    step()

    // second step (failed return)
    const stepResponse = step(response)

    // get the error out of the actual response
    const payload = response.problem

    // stepResponse should equal fetchUsersFailure action with error out of the actual response
    expect(stepResponse).toEqual(put(UsersActions.fetchUsersFailure(payload)))
  })
})
