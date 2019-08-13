<template>
  <div>
    <nav>
      
      <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm">
        <div class="container">
        <b-navbar-brand :to="{name: 'home'}">{Dy}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item :to="{name: 'about'}">About</b-nav-item>
              <b-nav-item :to="{name: 'contact'}">Contact</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
        </div>
      </b-navbar>
    </nav>

    <main class="container pt-3">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<style>
body {
  background-color: black;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showContent() {
      this.show = !this.show
    },
  }
}
</script>