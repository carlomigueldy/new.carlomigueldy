<template>
    <div>
        <div class="my-parallax my-title">
            <div class="title has-text-white is-size-1">Carlo Miguel Dy</div>
            <div class="subtitle has-text-primary">Aspiring Software Engineer.</div>
        </div>

        <section class="hero is-light" id="Portfolio">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">
                        <i class="fas fa-hammer"></i> Here are some of the projects I've built: 
                    </h1>
                    <div class="content">

                        <section class="section">
                            <div class="title"><a target="_blank" href="http://ethnogis.herokuapp.com"><i class="fas fa-check-circle"></i> EthnoGIS</a></div>
                            <div class="subtitle">An undergraduate Capstone project, a web-based application that focuses on displaying data-driven interactive maps. It delivers data management for maintaining information, provides data visualizations using interactive driven maps and the utilization of charts of the Indigenous Groups in Northern Mindanao (Region X), Philippines. EthnoGIS is built with <b>Laravel, Vue js, Vuetify and Leaflet js.</b> And it also integrates with the <a target="_blank" href="https://ethnogis.firebaseapp.com" class="has-text-primary">PWA</a> built on <b>Ionic 4 and Vue js</b> to achieve offline data gathering capabilities.</div>
                        </section>

                        <section class="section">
                            <div class="title"><a target="_blank" href="https://aseanmsuiit.firebaseapp.com"><i class="fas fa-check-circle"></i> Blog Entry on Sustainability</a></div>
                            <div class="subtitle">A simple blog on climate change prevention built with <b>Vue js & Buefy/Bulma.</b></div>
                        </section>

                        <section class="section">
                            <div class="title"><a target="_blank" href="https://carlomigueldy.github.io/gameofluck/"><i class="fas fa-check-circle"></i> Warcraft Game of Luck</a></div>
                            <div class="subtitle">A simple game on player versus monster built with <b>Vue js.</b></div>
                        </section>
                        
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-light" id="About">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">
                        <i class="fas fa-user-circle"></i> About Me
                    </h1>
                    <section class="section">
                        <div class="columns">
                            <div class="column is-one-quarter">
                                <center>
                                    <figure class="image is-128x128">
                                        <img class="is-rounded" src="../assets/me.jpg">
                                    </figure>
                                </center>
                            </div>
                            <div class="column">
                                <p class="subtitle">
                                    I am a college undergraduate and in my last year in university with a Bachelor's Degree in Information Technology, specializing in Database Systems at <a target="_blank" href="http://msuiit.edu.ph" class="has-text-primary">Mindanao State University - Iligan Institute of Technology</a>. I'm a fullstack engineer, proficient in using HTML5, CSS, Javascript, PHP, MySQL, PostgreSQL, SQLite, utilizing frameworks like Laravel, Vue js and prior experience with Nuxt js and Ionic 4 on Web Development, also with experience in using OOP languages like Java, C++ and Python, and DBMS like MySQL, IBM DB2, PostgreSQL. I also have a background in Software Engineering, Project Management, Database Security, Administration and Management, Distributed Databases, Information Engineering, and Web Services.
                                </p>
                                <section class="section" id="Skills">

                                    <div class="title"><i class="fab fa-vuejs"></i> My Skills</div>
                                    <div class="content">
                                        <ul class="columns">
                                            <div class="column">
                                                <li>HTML5</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
                                                <li>PHP</li>
                                                <li>Git</li>
                                                <li>Laravel</li>
                                                <li>Vue js</li>
                                                <li>Vuex</li>
                                            </div>
                                            <div class="column">
                                                <li>Vuetify js</li>
                                                <li>Bulma</li>
                                                <li>Buefy</li>
                                                <li>Bootstrap 4</li>
                                                <li>Leaflet js</li>
                                                <li>C/C++</li>
                                                <li>Java</li>
                                                <li>Python</li>
                                            </div>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>

        <section class="hero is-light" id="Contact">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">
                        <i class="fas fa-phone"></i> Contact Me
                    </h1>
                    <section class="section">
                        <h2 class="subtitle has-text-centered">
                            If you want to get in touch with me, send me an email at <a target="_blank" class="has-text-primary" href="mailto:carlomigueldy@gmail.com">carlomigueldy@gmail.com</a>
                        </h2>
                    </section>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
export default {

}
</script>

<style>
img {
    height: 300px;    
    width: 300px;
}

.my-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.my-parallax {
  /* The image used */
  background: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("../assets/bg.jpg");

  /* Set a specific height */
  min-height: 95vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>