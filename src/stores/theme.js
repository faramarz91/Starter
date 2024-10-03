import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import {MoonIcon, SunIcon, ComputerDesktopIcon} from "@heroicons/vue/16/solid/index.js";

export const useThemeStore = defineStore('theme', () => {
    const darkTheme = ref(false);
    const init = computed(() => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            darkTheme.value = true;
            document.documentElement.classList.add('dark');
        } else {
            darkTheme.value = false;
            document.documentElement.classList.remove('dark')
        }
    })
    const getTheme = () => {
        init;
        return darkTheme.value;
    }
    const setTheme = (theme) => {
        if (theme === true || theme === 'dark') {
            darkTheme.value = true;
            localStorage.setItem('theme', 'dark');
        } else {
            darkTheme.value = false;
            localStorage.setItem('theme', 'light');
        }
    }
    const getIcon = () => {
        if (darkTheme.value) {
            return MoonIcon
        } else
            return SunIcon;
    }

    const toggle = () => {
        setTheme(!darkTheme.value);
    }

    return {setTheme, getTheme, init, getIcon, toggle};
})