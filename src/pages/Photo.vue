<template>
    <div class="h-screen">
        <navbar/>
        <div class="h-[600px] md:bg-bg-photo bg-cover w-full relative flex flex-col items-center">
            <div class="h-full w-full md:backdrop-blur-sm md:backdrop-brightness-50"></div>
            <div class="absolute w-11/12 top-11">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <img class="w-14 h-14 rounded-lg object-cover" :src="`${authorImage}`" alt="">
                        <div class="md:text-white ml-2 flex flex-col justify-start">
                            <p class="text-2xl">{{ authorName }}</p>
                            <p class="mt-[-5px]">@{{ authorNick }}</p>
                        </div>
                    </div>
                    <div class="flex">
                        <button 
                            class="h-[50px] w-[50px] rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-200 shadow-full"
                            :class="{
                                'bg-white active:bg-red-400': !isFav,
                                'bg-red-400 active:bg-white': isFav
                            }"
                            @click="likeImg($route.params.id)"
                        >
                            <img src="heart.svg" class="invert" alt="heart">
                        </button>
                        <div class="flex ml-5 bg-yellow-300 md:w-40 justify-center w-[50px] rounded-lg items-center">
                            <img src="download.svg" alt="">
                            <p class="text-lg ml-4 hidden md:block">Download</p>
                        </div>
                    </div>
                </div>
                <img class="mt-10 w-full lg:h-[550px] md:h-96 h-60 rounded-lg shadow-xl object-contain bg-black" :src="`${image}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            image: '',
            authorImage: '',
            authorName: '',
            authorNick: '',
            isFav: false
        }
    },
    methods: {
        async fetchImage(id) {
            try{
                const responce = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=hY658AW7VOyD9TNNxZhtB_48W6nOyUYh7nJ0UGRIV6s`)
                this.image = responce.data.urls.regular
                this.authorImage = responce.data.user.profile_image.medium
                this.authorName = responce.data.user.name
                this.authorNick = responce.data.user.instagram_username
                this.imageId = responce.data.id
            } catch (e) {
               console.log(e)
            }
        },
        async checkFavs(id) {
            try{
                const responce = await axios.get('https://api.unsplash.com/users/keepshark/likes', {
                    headers: {
                        'Authorization': `Bearer oNcAcg3WEzl_FuUFCNQlrW7tBhdceZ9W_P8w0O5s_pQ`
                    }
                })
                const isFav = responce.data.map(e => e.id == id).includes(true)
                this.isFav = isFav
            } catch (e) {
               console.log(e)
            } 
        },
        async likeImg(id) {
            try{
                if (this.isFav) {
                    const responce = await axios.delete(`https://api.unsplash.com/photos/${id}/like`, {
                        headers: {
                            'Authorization': `Bearer oNcAcg3WEzl_FuUFCNQlrW7tBhdceZ9W_P8w0O5s_pQ`
                        }
                    })
                } else {
                    const responce = await axios.post(`https://api.unsplash.com/photos/${id}/like`,{}, {
                        headers: {
                            'Authorization': `Bearer oNcAcg3WEzl_FuUFCNQlrW7tBhdceZ9W_P8w0O5s_pQ`
                        }
                    })
                }
                this.isFav = !this.isFav
            } catch (e) {
               console.log(e)
            } 
        },
    },
    mounted(){
        this.fetchImage(this.$route.params.id)
        this.checkFavs(this.$route.params.id)
    }
}
</script>