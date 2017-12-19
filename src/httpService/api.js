import JsonApi from 'devour-client'

const Api = (function () {
  const api = new JsonApi({ apiUrl: 'https://web.monde.com.br/api/v2' })
  api.define('token', {
    login: '',
    password: '',
    token: ''
  })
  api.define('city', {
    type: '',
    name: '',
    people: {
      jsonApi: 'hasMany',
      type: 'person'
    }
  })
  api.define('person', {
    type: '',
    name: ''
  })
  api.define('task', {
    type: '',
    title: '',
    due: ''
  })

  const login = function () {
    return api.create('token', {
      type: 'auths',
      login: 'admin@erikcunha.monde.com.br',
      password: 'erikmonde'
    }).then(res => {
      api.headers['Authorization'] = 'Bearer ' + res.data.token
    })
  }

  const find = function (field) {
    return api.findAll(field)
  }

  return {
    'login': login,
    'find': find
  }
})()

export default Api
