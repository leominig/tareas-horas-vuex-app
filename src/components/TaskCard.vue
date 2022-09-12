<template>
        <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Mis Tareas</h5>
                        <slot name="tareas"></slot>
                </div>
                <button @click="useStore.registerUser('leonardo')" class="btn btn-info">Ingresar
                </button>
        </div>

</template> 

<script setup>

import { useUserStore } from '../stores/useStore'

const useStore = useUserStore()
</script>

<style>
</style>