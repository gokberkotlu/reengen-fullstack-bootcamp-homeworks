<template>
    <div class="navbar-main-container">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav class="navbar-container">
                <b-nav-item class="navbar-brand" href="#">Basket-App</b-nav-item>
                <Basket class="basket-dropdown" :basket="basket" />
            </b-navbar-nav>
        </b-navbar>
    </div>

</template>

<script>
import Basket from './Basket.vue'
    export default {
        components: {
            Basket
        },
        props: ["basket"],
    }
</script>

<style scoped>
    .navbar-main-container {
        margin-bottom: 50px;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .navbar-container {
        display: flex;
        align-items: center;
        padding: 0 5%;
    }

    .basket-dropdown {
        position: absolute;
        right: 100px;
        background-color: transparent;
    }
</style>