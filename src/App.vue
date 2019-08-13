<template>
  <div>
    <nav>
      <b-navbar toggleable="lg" type="dark" class="shadow-sm fixed-top" style="background-color: #41b883">
        <div class="container">
        <b-navbar-brand :to="{name: 'home'}" class="my-nav-item" style="font-size: 30px">{ <span class="font-weight-bold">Dy</span> }</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto text-uppercase text-center font-weight-bold" style="font-size: 12px; color: white;">
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home'}" class="my-nav-item">Home</b-nav-item>
              <b-nav-item :to="{name: 'about'}" class="my-nav-item">About</b-nav-item>
              <b-nav-item :to="{name: 'contact'}" class="my-nav-item">Contact</b-nav-item>
              <b-nav-item :to="{name: 'portfolio'}" class="my-nav-item">Portfolio</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
        </div>
      </b-navbar>
    </nav>
  
    <main class="my-bg-first" style="padding-top: 80px">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>

      <div class="my-bg-first">
        <div class="row">
          <div class="col text-center">
            Carlo Miguel Dy
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 
    }
  },
  methods: {
    // 
  }
}
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
img {
  transition: all 1s;
}
img:hover {
  transform: scale(1.05)
}
.my-nav-item {
  transition: all 0.5s;
}
.my-nav-item:hover {
  transform: scale(1.2);
}
.my-color {
  background-color: #DFDFDF;
}
.my-bg-first { 
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
.my-card {
  transition: all 1.5s;
}
.my-card:hover {
  transform: scale(1.1)
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>