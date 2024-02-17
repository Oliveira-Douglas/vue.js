import './assets/main.css'

import { createApp } from 'vue' //Cria aplicação 
import App from './App.vue' // Importando componente principal 
import router from './router' // Importando rota

import './assets/dist/build.css'

const app = createApp(App) // Criando aplicação usando app como componente principal. 

app.use(router) // Vai utilizar o roteamento

app.mount('#app')  // Montando a aplicação dentro de uma div. 
