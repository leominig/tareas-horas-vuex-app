import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTextoStore = defineStore('TextoStore', () => {
    const texto = ref("Bienvenido")
    return { texto }
})