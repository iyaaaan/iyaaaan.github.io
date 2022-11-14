import Index from './src/views/index.js';
import NotFound from './src/views/404.js';
import About from './src/views/about.js';
import Project from './src/views/project.js';
import Contact from './src/views/contact.js';


// Define some routes
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },

    {
        path: '/about',
        name: 'About',
        component: About,
    },

    {
        path: '/project',
        name: 'Project',
        component: Project,
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]


// Creates the router instance and pass the `routes` option
const router = VueRouter.createRouter({
    // Provides the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
                top: 100
            };
        }

        return {
            top: 0
        }

    }
})

// Creates and mounts the root instance.
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue'
        }
    },

    created() {
        console.log(this.message);
    }
})

// whole app router-aware.
app.use(router)
app.mount('#app')
