import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => ({
    users: []
  }),
  actions: {
    addUser(user) {
      this.users.push(user)
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex(u => u.id === updatedUser.id)
      if (index !== -1) {
        this.users.splice(index, 1, updatedUser)
      }
    }
  },
  getters: {
    getUsers: state => state.users
  }
})