<template>
    <div class="main-page">
        <Title />
        <div class="padding"></div>
        <IntroPage />
        <div class="padding"></div>
        <FeaturedPage />
        <div class="padding"></div>
        <PostPage />

        <footer class="page-footer">
            <div class="footer-content container-fluid">
                <div class="row">
                    <div class="col-md-12 py-5">
                        <a href="https://www.facebook.com/john.song.5264382"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/john_song_/"><i class="fab fa-instagram"></i></a>
                        <a href="https://github.com/jarhun88"><i class="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/channel/UCSJrG7j5AwuUcoD9hLetkmw?view_as=subscriber"><i
                                class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Title from "./components/Title.vue";
    import IntroPage from "./components/IntroPage.vue";
    import FeaturedPage from "./components/FeaturedPage.vue";
    import PostPage from "./components/PostPage.vue";

    export default {
        name: 'MainPage',
        components: {
            Title,
            IntroPage,
            FeaturedPage,
            PostPage,
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

    .footer-content {
        background: #058484;
    }

    .fab {
        padding: 10px;
        font-size: 20px;
    }

    a {
        color: white;
    }

    a:hover {
        opacity: 0.5;
    }
</style>