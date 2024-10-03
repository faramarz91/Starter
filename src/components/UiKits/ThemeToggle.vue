<script setup>

import {ref} from "vue";
import {useThemeStore} from "@/stores/theme.js";
const theme = useThemeStore();
theme.getTheme();

const changeTheme = () => {
    theme.toggle();
}


</script>

<template>
    <component :is="theme.getIcon()" @click="changeTheme" class="h-4 w-4 text-gray-900 cursor-pointer"/>
</template>

<style scoped>

</style>