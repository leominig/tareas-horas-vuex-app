<template>
  <CurrentTime />
  <TaskInput @add-task="addNewTask">
  </TaskInput>
  <task-card>
    <template #tareas>
      <ul class="list-group">
        <li class="list-group-item" v-for="(taskItem, index) in showList" :key="index">
          <input type="checkbox" :checked="false" />
          {{ taskItem.task }}
        </li>
      </ul>
    </template>

  </task-card>

  <div class="card">
    <p>{{ userStore.userData }}</p>
    <p>{{ upperCase }}</p>
    <h3>{{ userStore.lowerCase }}</h3>
    <h3>{{ textoStore.texto.toLocaleUpperCase() }}</h3>
  </div>

  <div>
    <button class="btn btn-primary m-3" @click="increment">Aumentar</button>
    <button class="btn btn-primary m-3" @click="decrement">Disminuir</button>
    <button class="btn btn-secondary m-3" @click="reset">Resetar</button>
    <button :disabled="bloquearBtn" class="btn btn-danger" @click="agregarNumero">Agregar</button>
    <p>Contador:</p>
    <p :style="{color: activeColor}" v-if="contador > 0 ? activeColor ='blue' : activeColor = 'red'">{{contador}}</p>    
 <ul>
  <li v-for="numero in numeros" :key="numero">{{numero}}</li>
 </ul>
 
  </div>

</template>

<script setup>

import { reactive, ref, computed } from 'vue'
import CurrentTime from './components/CurrentTime.vue'
import TaskInput from './components/TaskInput.vue'
import TaskCard from './components/TaskCard.vue'
import { useUserStore } from './stores/useStore'
import { useProductStore } from './stores/ProductStore'
import { useTextoStore } from './stores/TextoStore'

//mi store de Pinia!
const textoStore = useTextoStore()

const productStore = useProductStore()

const userStore = useUserStore()

const taskList = reactive([])

const createdAt = Date.now()

const contador = ref(0)

const activeColor = ref('blue')

const numeros = ref([])

const estado = ref(false)

const agregarNumero = () => {
 numeros.value.push(contador.value)
}

const increment = () => {
  contador.value ++
  if (contador > 0) {
    activeColor.value = blue
    
  } else {
    activeColor.value = red
    
  }
}

const decrement = () => {
  contador.value --
}

const reset = (()=>{
  return contador.value = 0
})

const bloquearBtn = computed (()=> {
  const numSearch = numeros.value.find(num => num === contador.value)
  return numSearch ? true : false;
})

const upperCase = computed(() =>
  userStore.userData.toUpperCase())

const today = ref(new Date(createdAt).toLocaleDateString())

const addNewTask = (task) => {
  taskList.push({ task })
  console.log(taskList)
}

const showList = computed(() => {
  return taskList
})


</script>

