<template>
  <div class="card">
    <div class="card-body">
      <p>Mi tarea es: {{ task }}</p>
      <input type="text" v-model="task">


    </div>
    <button @click.prevent="addTask" class="btn btn-primary mt-3">Add Task</button>
  </div>
</template>

<script setup>

import { ref } from 'vue'
const task = ref('')

const emit = defineEmits(['addTask'])

const addTask = () => {
  emit('addTask', task.value)
}


</script>

<style>
</style>