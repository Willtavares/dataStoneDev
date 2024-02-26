<script setup>
import { computed } from 'vue'
import Header from '../components/shared/header.vue'
import { userStore } from '@/stores/userStore'
import { productStore } from '@/stores/productStore'
import { marketStore } from '@/stores/marketStore'

const productsStore = productStore()
const products = computed(() => productsStore.getProducts)
const usersStore = userStore()
const users = computed(() => usersStore.getUsers)
const marketsStore = marketStore()
const associated = computed(() => marketsStore.getAssociates)
</script>

<template>
  <div>
    <Header />
    <div>
      <div class="w-full my-4">
        <h1 class="text-center text-3xl font-bold text-slate-800">
          Seja bem vindo ao sistema de cadastro
        </h1>
      </div>
      <div class="flex justify-around">
        <div
          class="flex flex-col items-center shadow appearance-none border rounded w-1/4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        >
          <div class="w-full bg-slate-500 rounded-sm text-slate-100 py-2">
            <h1 class="text-center">Usuário cadastrados</h1>
          </div>
          <div>
            <p class="py-2 text-xl">{{ users.length }}</p>
          </div>
          <div class="w-full bg-cyan-500 rounded-sm text-slate-100 text-center py-2">
            <router-link to="/users" class="cursor-pointer">Acessar</router-link>
          </div>
        </div>
        <div
          class="flex flex-col items-center shadow appearance-none border rounded w-1/4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        >
          <div class="w-full bg-slate-500 rounded-sm text-slate-100 py-2">
            <h1 class="text-center">Produtos Cadastrados</h1>
          </div>
          <div>
            <p class="py-2 text-xl">{{ products.length }}</p>
          </div>
          <div class="w-full bg-cyan-500 rounded-sm text-slate-100 text-center py-2">
            <router-link to="/products" class="cursor-pointer">Acessar</router-link>
          </div>
        </div>
        <div
          class="flex flex-col items-center shadow appearance-none border rounded w-1/4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
        >
          <div class="w-full bg-slate-500 rounded-sm text-slate-100 py-2">
            <h1 class="text-center">Usuários Associados</h1>
          </div>
          <div>
            <p class="py-2 text-xl">{{ associated.length }}</p>
          </div>
          <div class="w-full bg-cyan-500 rounded-sm text-slate-100 text-center py-2">
            <router-link to="/market" class="cursor-pointer">Acessar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
