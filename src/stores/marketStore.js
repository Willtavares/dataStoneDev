import { defineStore } from 'pinia'

export const marketStore = defineStore('marketStore', {
  state: () => ({
    associates: []
  }),
  actions: {
    addAssociation(associate) {
      this.associates.push(associate)
    },
    updateAssociation(updatedAssociate) {
      const index = this.associates.findIndex(u => u.id === updatedAssociate.id)
      if (index !== -1) {
        this.associates.splice(index, 1, updatedAssociate)
      }
    }
  },
  getters: {
    getAssociates: state => state.associates
  }
})