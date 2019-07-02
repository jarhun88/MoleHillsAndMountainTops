<template>
    <div class="main-page">
        <Title />
        <div class="padding"></div>
        <IntroPage />
        <div class="padding"></div>
        <FeaturedPage />

        <div class="posts">
            <div class="sub-title">
                <h3>Latest Destinations</h3>
            </div>
            <div class="images">
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252661703"><img class="image"
                            src="./images/taiwan.jpg" /></a>
                    <div class="image-text">TAIWAN</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252817771"><img class="image"
                            src="./images/singapore.jpg" /></a>
                    <div class="image-text">SINGAPORE</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252746627"><img class="image"
                            src="./images/thailand.jpeg" /></a>
                    <div class="image-text">THAILAND</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253151606"><img class="image"
                            src="./images/japan.jpg" /></a>
                    <div class="image-text">JAPAN</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771"><img class="image"
                            src="./images/korea.jpg" /></a>
                    <div class="image-text">KOREA</div>
                </div>
            </div>
        </div>
        <div class="padding"></div>
        
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

    export default {
        name: 'MainPage',
        components: {
            Title,
            IntroPage,
            FeaturedPage,
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

    .profile-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col-md {
        padding: 0px;
    }

    .row {
        height: 100%;
    }

    h1 {
        font-size: 50px;
        margin: 0px;
    }

    .sub-title {
        margin-top: 60px;
    }

    p {
        font-size: 20px;
    }

    .images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .image {
        height: 400px;
        width: 400px;
        padding: 5%;
        opacity: 0.95;
        filter: brightness(80%);
    }

    .image-box {
        position: relative;
        text-align: center;
        color: white;
    }

    .image-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-family: Helvetica;
        font-weight: bold;
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