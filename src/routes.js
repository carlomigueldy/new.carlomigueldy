import Home from './components/Home.vue'
import About from './components/About'
import Contact from './components/Contact'

const routes = [
    { 
        name: 'home', 
        path: '/', 
        component: Home 
    },
    { 
        name: 'about', 
        path: '/about', 
        component: About 
    },
    { 
        name: 'contact', 
        path: '/contact', 
        component: Contact 
    },
];

export default routes