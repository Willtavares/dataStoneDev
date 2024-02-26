<script setup>
import { ref, computed } from 'vue'
import { userStore } from '@/stores/userStore'
import { productStore } from '@/stores/productStore'
import { marketStore } from '@/stores/marketStore'

const productsStore = productStore()
const products = computed(() => productsStore.getActiveProducts)
const usersStore = userStore()
const users = computed(() => usersStore.getUsers)
const marketsStore = marketStore()
const associated = computed(() => marketsStore.getAssociates)

const idCounter = ref(0)
const selectUser = ref(false)
const selectProduct = ref([])
const produtcList = ref([])
const userSelected = ref(null)

const newAssociations = () => ({
  id: null,
  name: null,
  products: []
})

const newAssociation = ref(newAssociations())

function associations() {
  userSelected.value = users.value.find((x) => x.id === selectUser.value)

  for (let index = 0; index < selectProduct.value.length; index++) {
    const find = products.value.find((p) => p.id === selectProduct.value[index])
    produtcList.value.push(find)
  }

  newAssociation.value.id = idCounter.value++
  newAssociation.value.name = userSelected.value.name
  newAssociation.value.products = [...produtcList.value]

  marketsStore.addAssociation(newAssociation.value)

  newAssociation.value = newAssociations()
  produtcList.value = []
  selectUser.value = false
  selectProduct.value = []
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <h1 class="mb-4 pt-4 text-slate-700 font-bold text-2xl text-center">
      Bem vindo ao mercado de associação
    </h1>
    <div class="flex flex-col md:flex-row md:justify-around">
      <div
        class="border border-solid border-cyan-800 rounded-md bg-white min-w-96 w-full md:w-96 h-fit mb-4 md:mb-0"
      >
        <table class="w-full">
          <thead class="border-b border-gray-500">
            <tr>
              <th>Usuários</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-if="!users.length" class="w-full text-center">
              <p>Não há usuário cadastrado</p>
            </tr>
            <tr class="border-b border-gray-500" v-for="itemU of users" :key="itemU.id">
              <td class="p-2 text-center">
                <input type="radio" v-model="selectUser" :value="itemU.id" /> {{ itemU.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="border border-solid border-cyan-800 rounded-md bg-white min-w-96 w-full md:w-96 h-fit"
      >
        <table class="w-full">
          <thead class="border-b border-gray-500 w-full">
            <tr>
              <th>Produtos</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-if="!products.length" class="w-full text-center">
              <p>Não há produto cadastrado</p>
            </tr>
            <tr class="border-b border-gray-500" v-for="(itemP, index) of products" :key="index">
              <td class="p-2 text-center">
                <input type="checkbox" v-model="selectProduct" :value="itemP.id" :id="itemP.id" />
                {{ itemP.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <button
        @click="associations"
        class="text-white text-lg bg-slate-500 hover:bg-slate-700 rounded-md p-2 w-full md:w-1/4 my-2 md:mx-2"
      >
        Adicionar produtos ao usuário
      </button>
    </div>
    <div class="w-full flex flex-col justify-center items-center mt-6">
      <h1 class="m-4 text-slate-700 font-bold text-xl text-center">
        Usuários associados aos produtos
      </h1>
      <div
        class="border border-solid border-cyan-800 rounded-md bg-white min-w-96 w-full md:w-96 h-fit"
      >
        <table class="w-full">
          <thead class="border-b border-gray-500">
            <tr>
              <th>Usuários</th>
              <th>Produtos</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-if="!associated.length" class="w-full text-center">
              <p>Não há registros</p>
            </tr>
            <tr
              class="border-b border-gray-500"
              v-for="itemAssoc of associated"
              :key="itemAssoc.id"
            >
              <td class="p-2 text-center">
                {{ itemAssoc.name }}
              </td>
              <td class="p-2 text-center">
                <div v-for="productAssoc of itemAssoc.products" :key="productAssoc.name">
                  {{ productAssoc.name }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
