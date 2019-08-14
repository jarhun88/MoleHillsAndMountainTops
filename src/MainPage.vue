<template>
    <div class="main-page">
        <Title />
        <IntroPage />
        <FeaturedPage />
        <PostPage />
        <div class="padding"></div>
        <HikingPage />
        <div class="padding"></div>
        <Footer />
    </div>
</template>

<script>
    import Title from "./components/Title.vue";
    import IntroPage from "./components/IntroPage.vue";
    import FeaturedPage from "./components/FeaturedPage.vue";
    import PostPage from "./components/PostPage.vue";
    import HikingPage from "./components/HikingPage.vue";
    import Footer from "./components/Footer.vue";


    export default {
        name: 'MainPage',
        components: {
            Title,
            IntroPage,
            FeaturedPage,
            PostPage,
            HikingPage,
            Footer,
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

    @media screen and (max-width: 640px) {
        html,
        body {
            font-size: 60%;
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
    }
</style>