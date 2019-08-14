<template>
  <div>

    <div id="content">
      <div class="container">
        <div class="row pt-3">
          <div class="col-sm-12 col-md-12 col-lg-6">
            
            <div class="my-hello font-italic">Hello there my name is, </div>
            <div class="my-name">Carlo Miguel Dy</div>
            <p class="my-desc text-justify">and I am a self-taught <b>Web Developer</b> & <b>Programmer</b> from the Philippines. I make web applications/systems usually with Laravel</p>
            
            <div class="text-center">
              <router-link :to="{name: 'portfolio'}" class="btn my-btn-portfolio btn-light btn-lg pulse" style="border-radius: 30px">Portfolio <font-awesome-icon :icon="['fas', 'chevron-right']" class="ml-2" /></router-link>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 text-center">
            <img class="my-laravel mt-5 pr-4" src=".././assets/laravel-vue.svg" 
            alt="Laravel & Vue">
          </div>
        </div>
      </div>  
    </div>

    <div class="my-bg-second pt-5 mb-5">
      <div class="container text-center">
        <div class="row">
           <div class="col">
             <img style="padding-bottom: 60px " src="../assets/version-control.svg" alt="Version Control" height="250px" width="250px">
          </div>
          <div class="col">
            <h1 class="float-left mr-3">{ About Me }</h1>
            <p class="text-justify mb-5">I am a 22 year old undergraduate college student and in my last year in university with a degree in Information Technology, focusing in Database Systems at <a href="http://msuiit.edu.ph" target="_blank">Mindanao State University - Iligan Institute of Technology</a>. I am an experienced Laravel Developer with a year of experience in using PHP and that I've built personal & school projects with it.</p>
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
#content {
  margin-top: 80px;
}
.my-hello {
  padding-top: 60px;
  font-size: 30px;
}
.my-name {
  font-size: 60px; font-weight: bold;
}
.my-laravel {
  height: 500px;
  width: 500px;
  padding-bottom: 80px;
}
.my-btn-portfolio {
  background-color: #fff;
  border: none;
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
a {
  color: #41b883;
}
.my-icon {
  transition: all 0.5s;
  cursor: pointer;
}
.my-icon:hover {
  transform: scale(1.5)
}
#hover-content {
  display: none;
}
#parent:hover #hover-content {
  display: block;
}
@media only screen and (max-width: 414px) {
  #content {
    margin-top: 0;
  }
  .my-hello {
    font-size: 20px;
  }
  .my-name {
    font-size: 35px;
    margin-bottom: 10px;
    text-align: center;
  }
  .my-desc {
    font-size: 12px;
  }
  .my-laravel {
    margin-top: 30px;
    height: 300px;
    width: 300px;
    padding-left: 20px;
  }
  .my-btn-portfolio {
    margin-top: 15px;
    font-size: 14px;
  }
}
</style>

