<template>
  <div>
    <div class="flex flex-col items-center w-full mt-6">
      <h1 class="text-gray-700 font-semibold text-xl">Cadastro de usuários</h1>
      <form
        class="w-2/5 p-2 border border-solid border-cyan-800 rounded-md bg-white"
        @submit.prevent
      >
        <div class="my-2">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
            for="nameUsers"
          >
            Nome
          </label>
          <input
            class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nameUsers"
            v-model="user.name"
            id="nameUsers"
          />
        </div>
        <div class="flex my-2">
          <div class="mr-1 w-2/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
              for="document"
            >
              Documento
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="document"
              v-model="user.document"
              id="document"
            />
          </div>
          <div class="ml-1 w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
              for="phone"
            >
              Telefone
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="phone"
              v-model="user.phone"
              id="phone"
            />
          </div>
        </div>
        <div class="flex items-center my-2">
          <div class="w-2/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              v-model="user.email"
              id="email"
            />
          </div>
          <div class="m-auto">
            <label class="w-full text-gray-700 font-bold">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                name="isActive"
                id="isActive"
                v-model="user.isActive"
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
              @click="saveEditedUser"
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
      <div class="w-fit border border-solid border-cyan-800 rounded-md bg-white">
        <table class="w-[900px]">
          <thead class="border-b border-gray-500">
            <tr>
              <th>Nome</th>
              <th>Documento</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-if="!users.length" class="w-full text-center">
              <p>Não há usuário cadastro</p>
            </tr>
            <tr class="border-b border-gray-500" v-for="item of users" :key="item.id">
              <td class="p-2 text-center">{{ item.name }}</td>
              <td class="p-2 text-center">{{ item.document }}</td>
              <td class="p-2 text-center">{{ item.phone }}</td>
              <td class="p-2 text-center">{{ item.email }}</td>
              <td class="p-2 text-center" v-if="item.isActive === true">Ativo</td>
              <td class="p-2 text-center" v-if="item.isActive === false || item.isActive == null">
                Inativo
              </td>
              <td class="p-2 text-center border-l border-cyan-800">
                <button
                  @click="editUser(item.id)"
                  class="rounded-tl-md rounded-bl-md bg-cyan-500 hover:bg-cyan-600 py-1 px-2 text-sm text-white"
                >
                  Editar
                </button>
                <button
                  @click="toggleUserStatus(item.id)"
                  class="rounded-tr-md rounded-br-md bg-red-500 hover:bg-red-600 py-1 px-2 text-sm text-white"
                >
                  Desativar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([])
const idCounter = ref(0)

const newUser = () => ({
  id: null,
  name: null,
  document: null,
  phone: null,
  email: null,
  isActive: null
})

const user = ref(newUser())
const editingUserId = ref(null)

const enableEdit = ref(false)

function post() {
  idCounter.value++
  user.value.id = idCounter.value
  users.value.push(user.value)
  user.value = newUser()
}

function editUser(id) {
  enableEdit.value = true
  const userToEdit = users.value.find((u) => u.id === id)
  if (userToEdit) {
    user.value = { ...userToEdit }
    editingUserId.value = id
  }
}

function saveEditedUser() {
  const index = users.value.findIndex((u) => u.id === user.value.id)
  if (index !== -1) {
    users.value.splice(index, 1, { ...user.value })
    user.value = newUser()
    enableEdit.value = true
  }
}

function cancel() {
  user.value = newUser()
}

function toggleUserStatus(id) {
  const userToToggle = users.value.find((u) => u.id === id)
  if (userToToggle) {
    userToToggle.isActive = !userToToggle.isActive
  }
}
</script>

<style lang="scss" scoped></style>
