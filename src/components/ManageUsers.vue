<template>
  <div class="flex flex-col items-center w-full mt-6">
    <h1 class="text-gray-700 font-semibold text-xl">Cadastro de usuários</h1>
    <div class="w-2/5 p-2 border border-solid border-cyan-800 rounded-md">
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
            id="email"
          />
        </div>
        <div class="m-auto">
          <label class="w-full text-gray-700 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" name="isActive" id="isActive" />
            <span class="text-sm"> Ativo </span>
          </label>
        </div>
      </div>
      <div>
        <button
          class="text-white text-lg bg-slate-500 hover:bg-slate-700 rounded-md p-4 w-full my-2"
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
