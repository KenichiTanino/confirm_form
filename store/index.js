export const state = () => ({
    users: [
      {
        id: 1,
        name: 'sato',
        email: 'sato@sample.com',
        ipaddress: '192.168.1.1',
        gender: '男性',
        memo: '趣味1',
      },
      {
        id: 2,
        name: 'suzuki',
        email: 'suzuki@sample.com',
        ipaddress: '192.168.1.1',
        gender: '男性',
        memo: '趣味2',
      },
      {
        id: 3,
        name: 'takahashi',
        email: 'takahashi@sample.com',
        ipaddress: '192.168.1.1',
        gender: '男性',
        memo: '趣味3',
      },
      {
        id: 4,
        name: 'tanaka',
        email: 'tanaka@sample.com',
        ipaddress: '192.168.1.1',
        gender: '男性',
        memo: '趣味4',
      },
      {
        id: 5,
        name: 'watanabe',
        email: 'watanabe@sample.com',
        ipaddress: '192.168.1.1',
        gender: '男性',
        memo: '趣味5',
      },
      {
        id: 6,
        name: 'ito',
        email: 'ito@sample.com',
        ipaddress: '192.168.1.1',
        gender: '女性',
        memo: '趣味6',
      },
    ]
  })
  
  export const getters = {
    getUsers (state) {
      return state.users
    },
    getUser: (state) => (id) => {
      return state.users.find(user => user.id === parseInt(id))
    },
  }
  
  export const mutations = {
    addUser (state, payload) {
      state.users.push(payload.user)
    },
    updateUser (state, payload) {
      state.users.forEach((user, index) => {
        if (user.id === payload.user.id) {
          state.users.splice(index, 1, payload.user)
        }
      })
    },
    removeUser (state, payload) {
      state.users.forEach((user, index) => {
        if (user.id === payload.user.id) {
          state.users.splice(index, 1)
        }
      })
    }
  }
