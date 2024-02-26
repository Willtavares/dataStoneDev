# data-stone-challenge

# Instruçoes

Primeiramente quero agradecer pela oportunidade dada e pela satisfação em fazer este desafio.

Neste desafio eu utilizei o Vue 3 com Javascript, para estilização, o Tailwind por ser o framework para CSS mais completo do mercado para quem deseja aplicar agilidade e praticidade ao seu projeto e para gerenciamento de estado das informações, o Pínia. Por ser a Lib de gerenciamento de estado mais recomendado para o Vue3.

Não foi necessário consumir nenhuma API externa para que haja o funcionamento do projeto enquanto estiver aberto.
Graças ao Pínia, todas a informações foram reusadas entre os componentes.

Separei os componentes com 3 responsabilidades distintas.

1- Para o cadastramento e gerenciamento de usuários.
Este é possivel cadastrar as informações pertinentes aos usuários; editar e alterar seu estado de ativação.

2- Para o cadastramento e gerenciamento de produtos.
Este é possivel cadastrar as informações pertinentes aos produtos; editar e alterar seu estado de ativação.

3- Para a associação de usuários aos produtos.
Aonde se pode ter uma lista de usuários e produtos **ativos** para a associação dos produtos ao usuário.
Desenvolvi uma interface bem simples e eficiente, aonde marcamos o usuário de forma única e selecionamos os produtos ativos na lista.

Ao finalizar os itens desejados, uma listagem exibe os usuários e seus respectivos produtos.

Na sua tela raiz, está separado um pequeno Dashboard aonde se pode ter as informações contábeis destes cadastros.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
