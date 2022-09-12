import { defineStore } from 'pinia'
import products from '../data/products.json'
import { ref } from 'vue'

export const useProductStore = defineStore('ProductStore', () => {
    const productos = ref([{
        products,
    }])
    return { productos }
})