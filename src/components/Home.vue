<template>
  <div>

    <div style="margin-bottom: 80px">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="font-italic" style="font-size: 30px; padding-top: 100px">Hello there my name is, </div>
            <div style="font-size: 60px">Carlo Miguel Dy</div>
            <p>.. and I am a Laravel and Vue js Developer from the Philippines</p>
            <div class="text-center">
              <router-link :to="{name: 'portfolio'}" class="my-nav-item btn btn-light btn-lg" style="border-radius: 30px">Portfolio</router-link>
            </div>
          </div>
          <div class="col text-center">
            <img class="mt-5" src=".././assets/laravel-vue.svg" 
            alt="Laravel & Vue" width="400px" height="400px">
          </div>
        </div>
      </div>  
    </div>

    <div class="my-bg-second pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            ToolKit
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.my-nav-item:hover {
  background-color: #41b883;
  border-color: #41b883;
  border: none;
  color: #fff;
  outline: 0;
}
</style>

<script>
export default {
  name: 'Home',
}
</script>

