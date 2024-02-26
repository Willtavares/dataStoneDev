import { defineStore } from 'pinia'

export const productStore = defineStore('productStore', {
  state: () => ({
    products: []
  }),
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex(u => u.id === updatedProduct.id)
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct)
      }
    }
  },
  getters: {
    getProducts: state => state.products,

    getActiveProducts: state => state.products.filter(product => product.isActive)
  }
})