<template>
  <div>
    <div class="container pl-5 pr-5">
      <div class="d-flex justify-content-center align-items-center min-vh-100 text-center">
        <div>
          <!-- <img src="../assets/laptop.svg" alt=""> -->
          <div class="my-name font-name" style="letter-spacing: 3px">Carlo Miguel Dy</div>
          <div class="my-desc font-livvic mb-4 text-center">
            <div>Aspiring Software Engineer.</div>
            <div>College Undergrad.</div>
          </div>
          <div class="text-center">
            <router-link :to="{name: 'projects'}" class="btn my-btn-portfolio 
            btn-light btn-lg pulse" style="border-radius: 30px">
              View Projects 
              <small>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2" />
              </small>
            </router-link>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
}
.font-name {
  /* font-family: 'Hepta Slab', serif; */
  font-family: 'Roboto Slab', serif;
}
.font-livvic {
  font-family: 'Livvic', sans-serif;
}
.content { 
  background-color: #34495e;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-hello {
  font-size: 30px;
}
.my-name {
  font-size: 60px; 
}
.my-laravel {
  height: 400px;
  width: 400px;
}
.my-btn-portfolio {
  background-color: transparent;
  color: #41b883;
  border-color: #41b883;
  outline: 0;
}
.my-btn-portfolio:hover {
  background-color: #41b883;
  color: #fff;
}
.pulse {
  cursor: pointer;
  box-shadow: 0 0 0 rgba(65, 184, 131, 0.7);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(65, 184, 131, 0.7);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(65, 184, 131, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(65, 184, 131, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(65, 184, 131, 0.7);
    box-shadow: 0 0 0 0 rgba(65, 184, 131, 0.7);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(65, 184, 131, 0);
      box-shadow: 0 0 0 10px rgba(65, 184, 131, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(65, 184, 131, 0);
      box-shadow: 0 0 0 0 rgba(65, 184, 131, 0);
  }
}

@media only screen and (max-width: 414px) {
  .my-hello {
    font-size: 18px;
    text-align: center;
  }
  .my-name {
    font-size: 30px;
    margin-bottom: 10px;
    text-align: center;
  }
  .my-desc {
    font-size: 16px;
    text-align: center;
  }
  .my-laravel {
    height: 250px;
    width: 250px;
  }
  .my-btn-portfolio {
    margin-top: 15px;
    font-size: 14px;
  }
}
</style>

