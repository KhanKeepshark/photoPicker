import { createRouter, createWebHashHistory } from "vue-router"
import Search from '../pages/Search.vue';
import Photo from '../pages/Photo.vue';
import Favourites from '../pages/Favourites.vue';

const routes = [
    {
        path: '/',
        component: Search
    },
    {
        path: '/photo/:id',
        component: Photo
    },
    {
        path: '/favourites',
        component: Favourites
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router