<template>
    <div class="main-page">
        <Title />
        <div class="padding"></div>
        <IntroPage />
        <div class="padding"></div>
        <FeaturedPage />
        <PostPage />
        <div class="padding"></div>
        <Footer />
    </div>
</template>

<script>
    import Title from "./components/Title.vue";
    import IntroPage from "./components/IntroPage.vue";
    import FeaturedPage from "./components/FeaturedPage.vue";
    import PostPage from "./components/PostPage.vue";
    import Footer from "./components/Footer.vue";

    export default {
        name: 'MainPage',
        components: {
            Title,
            IntroPage,
            FeaturedPage,
            PostPage,
            Footer,
        },
        props: {
        }
    }
</script>

<style>
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