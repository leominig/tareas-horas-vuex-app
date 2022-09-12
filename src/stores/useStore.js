import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const userData = ref('leonardo minig')
    const userMail = ref('LEONARDOMINIG@GMAIL.COM')
    const lowerCase = computed(() => {
        return userMail.value.toLowerCase()
    })
    function registerUser(name) {
        userData.value = name
    }
    return { userData, userMail, lowerCase, registerUser }
})