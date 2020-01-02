<template>
    <div class="main-page">
        <Map />

    </div>
</template>

<script>
    import Map from "./components/Map.vue";

    export default {
        name: 'MainPage',
        components: {
            Map
        },
        props: {
        }
    }
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        font-size: 100%;
    }

    .main-page {
        width: 100%;
        height: 100%;
    }

    /* @media screen and (max-width: 375px) {
        html,
        body {
            font-size: 90%;
        }
    }

    .container-fluid {
        padding: 0;
    }

    .padding {
        height: 70px;
    }

    .col-md {
        padding: 0px;
    }

    .row {
        height: 100%;
    }

    p {
        font-size: 20px;
    } */
</style>