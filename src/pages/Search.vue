<template>
    <div>
        <navbar/>
        <div>
            <div class="bg-bg-hat h-[230px] bg-cover bg-no-repeat flex items-center justify-center relative">
                <div class="absolute backdrop-brightness-50 w-full h-full"></div>
                <div class="h-[70px] md:w-1/2 w-11/12 bg-white text-2xl flex justify-between items-center md:px-8 px-5 font-thin z-10">
                    <input v-model="searchQuery" class="h-full w-4/5 placeholder-black focus:outline-none" placeholder="Поиск" type="text">
                    <img @click="click" src="magnifying-glass.svg" class="mr-[10px] invert cursor-pointer" alt="heart">
                </div>
            </div>
            <div class="py-[114px] flex flex-col items-center">
                <div class="w-4/5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div class="cursor-pointer" @click="$router.push(`/photo/${image.id}`)" v-for="image in images" :key="image">
                        <img class="w-full object-cover h-[330px]" :src="`${image.urls.regular}`" alt="">
                    </div>
                </div>
                <div class="loader" id="loader"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            searchQuery: '',
            images: [],
            loadingImages: false,
        }
    },
    methods: {
        async fetchImages(params, push) {
            if (this.loadingImages) return
            try{
                this.loadingImages = true;
                const responce = await axios.get('https://api.unsplash.com/photos/random?client_id=hY658AW7VOyD9TNNxZhtB_48W6nOyUYh7nJ0UGRIV6s&count=9', {params})
                push ? this.images = [...this.images, ...responce.data] : this.images = responce.data
                console.log('123')
            } catch (e) {
               console.log(e)
            } finally {
                this.loadingImages = false
            }
        },
        click(){
            const params = new URLSearchParams({'query': this.searchQuery})
            this.fetchImages(params)
        },
        isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    },
    mounted() {
        this.fetchImages()
        window.addEventListener('scroll', e => {
            const loadImages = document.getElementById('loader')
            if (this.isElementInViewport(loadImages)) {
                const params = new URLSearchParams({'query': this.searchQuery})
                this.fetchImages(params, true)
            }
        })
    }
}
</script>

<style>
    .loader {
    margin-top: 100px;
    border: 5px solid #EAF0F6;
    border-radius: 50%;
    border-top: 5px solid #000000;
    width: 50px;
    height: 50px;
    animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
</style>