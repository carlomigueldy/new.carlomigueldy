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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>