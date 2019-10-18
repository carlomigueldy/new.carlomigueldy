<template>
    <div>
        <div class="my-parallax my-title">
            <div class="content">
                <vue-typer 
                class="title has-text-white has-text-centered is-size-1"
                :text="[
                    'Hi.', 
                    'My name is Carlo Miguel Dy', 
                    'I am from the Philippines', 
                    'and I aspire to be a Software Engineer.'
                ]">
                </vue-typer>
            </div>
        </div>
        <Portfolio />
        <About />
        <Contact />
    </div>
</template>

<script>
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import { VueTyper } from 'vue-typer'

export default {
    components: {
        Portfolio,
        About,
        Contact,
        VueTyper,
    }
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
  background: linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("../assets/bg.jpg");
  min-height: 95vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.vue-typer .custom.char.typed {
  color: #fff;
}

.vue-typer .custom.char {
  color: #D4D4BD;
}
.vue-typer .custom.char.selected {
  background-color: #264F78;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #3F51B5;
}
</style>