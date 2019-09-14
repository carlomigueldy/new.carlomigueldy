<template>
  <div>
    <header>
      <Navbar />
    </header>
  
    <main>
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <footer class="fixed-bottom">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Navbar, Footer },
}
</script>

<style>
#content {
  padding-top: 5rem;
}
a {
  color: #41b883;
}
a:hover {
  color: #41b883;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #11273D;
  color: #ffffff;
  background: linear-gradient(0deg,rgba(17,39,61,0.78),rgba(17,39,61,0.78)),url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

img {
  transition: all 1s;
}
img:hover {
  transform: scale(1.05)
}
.my-color {
  background-color: #DFDFDF;
}
.my-main { 
  background-color: #11273D;
  color: white;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-bg-second { 
  background-color: #34495e;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-bg-third { 
  background-color: #8499AF;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-footer { 
  background-color: #11273D;
  color: white;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>