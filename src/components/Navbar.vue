<template>
<nav class="bg-black lg:px-[221px] md:px-28 px-5 h-20 flex items-center justify-between">
    <img class="h-11" src="logo.png" alt="logo">
    <div class="flex md:gap-9 gap-5 text-lg">
        <router-link class="text-white cursor-pointer flex" v-if="$route.fullPath !== '/'" to="/">
            <img src="magnifying-glass.svg" class="mr-[10px]" alt="heart">
            <p class="hidden md:block">Поиск</p>
        </router-link>
        <router-link class="text-white cursor-pointer flex" to="/favourites">
            <img src="heart.svg" class="mr-[10px]" alt="heart">
            <p class="hidden md:block">Избранное</p>
        </router-link>
    </div>
</nav>
</template>

<script>
</script>