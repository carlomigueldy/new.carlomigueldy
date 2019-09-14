<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div class="row mb-5">
        <div class="col-sm-12 col-md-12 col-lg-6 text-center" id="section-1">
          <img class="my-const" src="../assets/under-construction.svg" alt="Section Under Construction">
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 text-center" id="section-2">
          <h1 class="my-header display-3">{ Projects }</h1>
          <h1>Under Construction</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
}
</script>

<style scoped>
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
    font-size: 50px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 100px;
  }
}
</style>