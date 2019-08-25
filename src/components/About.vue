<template>
  <div class="container text-center" id="content">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <img src="../assets/version-control.svg" alt="Version Control">
      </div>
      <div class="about col-sm-12 col-md-12 col-lg-6">
        <h1>{ About Me }</h1>
        <p class="text-justify">I am a 22 year old college undergraduate and in my last year in university with a Bachelor's Degree in Information Technology, specializing in Database Systems at <a href="http://msuiit.edu.ph" target="_blank">Mindanao State University - Iligan Institute of Technology</a>. I use the Laravel framework and Vue js to build school and personal projects.</p>
        <font-awesome-icon :icon="['fab', 'vuejs']" class="icon m-3" />
        <font-awesome-icon :icon="['fab', 'laravel']" class="icon m-3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
img {
  height: 500px;
  width: 500px;
}
.about {
  padding-top: 7rem;
}
.icon {
  font-size: 5rem;
}
@media only screen and (max-width: 414px) {
  img {
    height: 250px;
    width: 250px;
  }
  .about {
    padding-top: 0;
    margin-bottom: 5rem;
  }
}
</style>