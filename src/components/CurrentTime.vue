<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Hoy es:</h5>
      <p class="card-text">{{ getCurrentTime }}</p>

    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
const getCurrentTime = computed(() => {
  const intlDateTime = reactive(new Intl.DateTimeFormat('sp-GB', { dateStyle: 'full', timeStyle: 'long' }))
  return intlDateTime.format(new Date())
}) 
</script>
<style>
</style>