import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const info = ref({
        data: {},
        token: ''
    })

    const logout = () => {
        info.value.token = '';
    }

    return { info, logout }
})
