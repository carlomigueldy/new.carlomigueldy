<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div class="row mb-5">
        <div class="col-lg-12 text-center">
          <h1>{ Contact Me }</h1>
          <a href="mailto:carlomigueldy@gmail.com" target="_blank">
            <h2>carlomigueldy@gmail.com</h2>
          </a>
          <img src="../assets/contact.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
img {
  height: 300px;
  width: 300px;
}
.my-header {
  padding-top: 8rem;
}
.my-const {
  height: 450px; 
  width: 450px;
}
@media only screen and (max-width: 414px) {
  #content {
    padding-top: 40px;
  }
  .my-const {
    height: 300px;
    width: 300px;
    padding-top: 35px;
    padding-right: 15px;
  }
  .my-header {
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 55px;
  }
  h1 {
    padding-top: 5rem;
  }
  h2 {
    font-size: 20px;
  }
  img {
  height: 250px;
  width: 250px;
  }
}
</style>