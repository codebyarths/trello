<script setup lang="js">
import { ref } from 'vue'
import { useStore } from 'vuex'
import json from './teste.json'

const store = useStore()
const items = ref([])

const minhasListas = async () => {
  try {
    const { data } = await store.dispatch("ActionGetListAgendaConsulta")
    items.value = data

  } catch (error) {
    console.error(error)
  }

}


</script>

<template>
  <div class="historico-lista  d-flex justify-content-center align-items-center vh-100">
    <div class="card" v-for="(item, index) in json.itens" :key="index" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{item.nome }}</h5>
        <p class="card-text">{{ item.descricao}}</p>
        <p class="card-text">{{ item.status }}</p>

        <a href="#" class="btn btn-primary">ver atividade</a>
      </div>
    </div>

  </div>
</template>
