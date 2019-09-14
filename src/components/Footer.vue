<template>
    <div class="container-fluid text-center">
        <a href="https://www.facebook.com/polarixdy" target="_blank" class="my-footer-item"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="https://www.instagram.com/carlomigueldy/" target="_blank" class="ml-4 my-footer-item"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="https://twitter.com/CarloMiguelDy" target="_blank" class="ml-4 my-footer-item"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="https://www.linkedin.com/in/carlo-miguel-dy-168797181/" target="_blank" class="ml-4 my-footer-item"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
        <a href="https://github.com/carlomigueldy" target="_blank" class="ml-4 my-footer-item"><font-awesome-icon :icon="['fab', 'github-alt']" /></a>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.my-footer-item {
    color: white;
    font-size: 2rem;
}
.my-footer-item:hover {
    color: #41b883;
}
</style>