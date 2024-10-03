<template>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form ref="loginData" @submit.prevent="login" class="space-y-6" action="#" method="POST">
<!--            email-->
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
<!--            password-->
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                        <a href="#" class="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
                    </div>
                </div>
                <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

<!--            keep login-->
            <div class="mt-10 space-y-10">
                <fieldset>
                    <div class="mt-2 space-y-6">
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                            </div>
                            <div class="text-sm leading-6">
                                <label for="comments" class="font-medium text-gray-900">Stay me Logged In</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            {{ ' ' }}
            <RouterLink :to="{name:'register'}" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">Start a 14 day free trial</RouterLink>
        </p>
    </div>
</template>
<script setup>
    const login = () => {

    }
</script>