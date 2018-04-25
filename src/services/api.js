import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://jsonplaceholder.typicode.com') => {
  // ------
  // Configuration
  // ------
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  })

  // ------
  // Services
  // ------
  const getUsers = () => api.get('/users')

  // ------
  // Interface
  // ------
  return {
    getUsers,
  }
}

export default {
  create,
}
