import Actions, { reducer, INITIAL_STATE } from './users_redux'

describe('Users reducer', () => {
  describe('General-purpose actions', () => {
    test('unhandled action resets state', () => {
      const state = reducer(undefined, {})

      expect(state).toMatchObject(INITIAL_STATE)
    })

    test('RESET action resets state', () => {
      const state = reducer(undefined, Actions.reset())

      expect(state).toMatchObject(INITIAL_STATE)
    })
  })

  describe('Fetch users actions', () => {
    test('FETCH_USERS action gets users from server', () => {
      const mockState = {
        list: null,
        fetching: true,
        error: null,
      }
      const state = reducer(INITIAL_STATE, Actions.fetchUsers())

      expect(state).toMatchObject(mockState)
    })

    test('FETCH_USERS_FAILURE action captures a failed request', () => {
      const mockState = {
        list: null,
        fetching: false,
        error: 'SERVER_ERROR',
      }
      const state = reducer(INITIAL_STATE, Actions.fetchUsersFailure('SERVER_ERROR'))

      expect(state).toMatchObject(mockState)
    })

    test('FETCH_USERS_SUCCESS action captures a success request', () => {
      const list = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      }]
      const mockState = {
        list,
        fetching: false,
        error: null,
      }
      const state = reducer(INITIAL_STATE, Actions.fetchUsersSuccess(list))

      expect(state).toMatchObject(mockState)
    })
  })
})
