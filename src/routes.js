import Home from './components/Home.vue'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

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
    { 
        name: 'projects', 
        path: '/projects', 
        component: Projects 
    },
];

export default routes