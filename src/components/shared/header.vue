<template>
  <div>
    <nav class="bg-gray-200 py-2 flex items-center">
      <router-link to="/"
        ><img src="../../assets/images/stone.png" alt="" class="w-28 ml-2"
      /></router-link>

      <ul class="text-gray-800">
        <li
          class="inline mx-2 p-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out hover:text-gray-900"
        >
          <router-link to="/users">Usuário</router-link>
        </li>
        <li
          class="inline mx-2 p-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out hover:text-gray-900"
        >
          <router-link to="/products">Produtos</router-link>
        </li>
        <li
          class="inline mx-2 p-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out hover:text-gray-900"
        >
          <router-link to="/market">Mercado</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
