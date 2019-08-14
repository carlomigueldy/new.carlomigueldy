import Home from './components/Home.vue'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

const routes = [
    { 
        name: 'home', 
        path: 'carlomigueldy', 
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
    { 
        name: 'portfolio', 
        path: '/portfolio', 
        component: Portfolio 
    },
];

export default routes