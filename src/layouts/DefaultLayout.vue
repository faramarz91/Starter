<template>
    <div class="bg-white dark:bg-gray-800">
        <nav-header/>

        <RouterView/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavHeader from "@/components/UI/Nav/NavHeader.vue";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>