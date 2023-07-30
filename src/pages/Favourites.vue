<template>
    <div>
        <navbar/>
        <div>
            <h1 class="md:py-24 py-10 md:text-7xl text-4xl font-bold text-center">Избранное</h1>
            <div class="pb-40 flex flex-col items-center">
                <div class="w-4/5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div class="cursor-pointer" @click="$router.push(`/photo/${image.id}`)" v-for="image in favImages" :key="image">
                        <img class="w-full object-cover h-[330px]" :src="`${image.urls.regular}`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            favImages: [],
        }
    },
    methods: {
        async fetchFavs() {
            try{
                const responce = await axios.get('https://api.unsplash.com/users/keepshark/likes', {
                    headers: {
                        'Authorization': `Bearer oNcAcg3WEzl_FuUFCNQlrW7tBhdceZ9W_P8w0O5s_pQ`
                    },
                    cache: false,
                })
                this.favImages = responce.data
            } catch (e) {
               console.log(e)
            } 
            console.log(this.favImages)
        },
    },
    mounted() {
        this.fetchFavs()
    },
}
</script>