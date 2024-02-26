<template>
  <div>
    <div class="flex flex-col items-center w-full mt-6">
      <h1 class="text-gray-700 font-semibold text-xl">Cadastro de Produtos</h1>
      <form
        class="w-2/5 p-2 border border-solid border-cyan-800 rounded-md bg-white"
        @submit.prevent
      >
        <div class="flex items-center my-2">
          <div class="w-2/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
              for="nameProduct"
            >
              Nome
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nameProduct"
              v-model="product.name"
              id="nameProduct"
            />
          </div>
          <div class="m-auto">
            <label class="w-full text-gray-700 font-bold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                name="isActive"
                v-model="product.isActive"
                id="isActive"
              />
              <span class="text-sm"> Ativo </span>
            </label>
          </div>
        </div>
        <div>
          <div v-if="!enableEdit">
            <button
              class="text-white text-lg bg-slate-500 hover:bg-slate-700 rounded-md p-4 w-full my-2"
              @click="post"
            >
              Cadastrar
            </button>
          </div>
          <div v-if="enableEdit" class="flex">
            <button
              @click="saveEditedProduct"
              class="rounded-tl-md rounded-bl-md bg-cyan-500 hover:bg-cyan-600 py-1 px-2 w-full text-sm text-white"
            >
              Alterar
            </button>
            <button
              @click="cancel"
              class="rounded-tr-md rounded-br-md bg-red-500 hover:bg-red-600 py-1 px-2 w-1/4 text-sm text-white"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="flex justify-center w-full mt-8">
      <div class="w-96 border border-solid border-cyan-800 rounded-md bg-white">
        <table class="w-full">
          <thead class="border-b border-gray-500 w-full">
            <tr>
              <th>Nome</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-if="!products.length" class="w-full text-center">
              <p>Não há produto cadastrado</p>
            </tr>
            <tr class="border-b border-gray-500" v-for="item of products" :key="item.id">
              <td class="p-2 text-center">{{ item.name }}</td>
              <td class="p-2 text-center" v-if="item.isActive === true">Ativo</td>
              <td class="p-2 text-center" v-if="item.isActive === false || item.isActive == null">
                Inativo
              </td>
              <td class="p-2 text-center border-l border-cyan-800 flex justify-center">
                <div>
                  <button
                    @click="editProduct(item.id)"
                    class="rounded-tl-md rounded-bl-md bg-cyan-500 hover:bg-cyan-600 py-1 px-2 text-sm text-white w-full"
                  >
                    Editar
                  </button>
                </div>
                <div v-if="!item.isActive">
                  <button
                    @click="toggleProductStatus(item.id)"
                    class="rounded-tr-md rounded-br-md bg-green-500 hover:bg-green-600 py-1 px-4 text-sm text-white w-full"
                  >
                    Ativar
                  </button>
                </div>
                <div v-else>
                  <button
                    @click="toggleProductStatus(item.id)"
                    class="rounded-tr-md rounded-br-md bg-red-500 hover:bg-red-600 py-1 px-2 text-sm text-white w-full"
                  >
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { productStore } from '@/stores/productStore'

const productsStore = productStore()
const products = computed(() => productsStore.getProducts)
const idCounter = ref(0)
const newProduct = () => ({
  id: null,
  name: null,
  isActive: null
})
const product = ref(newProduct())
const editingProductId = ref(null)
const enableEdit = ref(false)

function post() {
  idCounter.value++
  product.value.id = idCounter.value
  productsStore.addProduct(product.value)
  product.value = newProduct()
}

function editProduct(id) {
  enableEdit.value = true
  const userToEdit = products.value.find((u) => u.id === id)
  if (userToEdit) {
    product.value = { ...userToEdit }
    editingProductId.value = id
  }
}

function saveEditedProduct() {
  productsStore.updateProduct(product.value)
  product.value = newProduct()
  enableEdit.value = false
}

function cancel() {
  product.value = newProduct()
}

function toggleProductStatus(id) {
  const userToToggle = products.value.find((u) => u.id === id)
  if (userToToggle) {
    userToToggle.isActive = !userToToggle.isActive
  }
}
</script>

<style lang="scss" scoped></style>
