<template>
    <nav>
        <b-navbar toggleable="lg" type="dark" class="shadow-sm fixed-top bg-vue">
            <div class="container">
                <b-navbar-brand :to="{name: 'home'}" class="my-nav-item">{ <span class="font-weight-bold">Dy</span> }</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto text-uppercase text-center font-weight-bold" style="font-size: 12px; color: white;">
                    <b-navbar-nav>
                        <b-nav-item :to="{name: 'home'}" class="my-nav-item">Home</b-nav-item>
                        <b-nav-item :to="{name: 'about'}" class="my-nav-item">About</b-nav-item>
                        <b-nav-item :to="{name: 'contact'}" class="my-nav-item">Contact</b-nav-item>
                        <b-nav-item :to="{name: 'projects'}" class="my-nav-item">Projects</b-nav-item>
                    </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
.bg-vue {
    background-color: #41b883;
}
</style>