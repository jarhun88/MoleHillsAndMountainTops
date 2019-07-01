<template>
    <div class="main-page">
        <Title />

        <div class="padding"></div>

        <FeaturedPage />

        <div class="padding"></div>

        <div class="latest-feed">
            <div class="second-picture">
                <div class="row">
                    <div class="col-md-6 latest-feed-box">
                        <div class="text-box-2">
                            <div class="latest-feed-title">
                                Reuniting with old faces
                            </div>
                            <div class="latest-feed-para">
                                I recently had the opportunity to go back to my hometown Busan, in South
                                    Korea. To be able to reconnect
                                    with my family and my culture was an unforgettable experience.
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 video-box">
                        <iframe src="https://www.youtube.com/embed/zuchgwZ1Abs" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="posts">
            <div class="sub-title">
                <h3>Latest Destinations</h3>
            </div>
            <div class="images">
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252661703"><img class="image" src="./images/taiwan.jpg" /></a>
                    <div class="image-text">TAIWAN</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252817771"><img class="image" src="./images/singapore.jpg" /></a>
                    <div class="image-text">SINGAPORE</div>
                </div>
                <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252746627"><img class="image" src="./images/thailand.jpeg" /></a>
                    <div class="image-text">THAILAND</div>
                </div>
                <div class="image-box">
                        <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253151606"><img class="image" src="./images/japan.jpg" /></a>
                    <div class="image-text">JAPAN</div>
                </div>
                <div class="image-box">
                        <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771"><img class="image" src="./images/korea.jpg" /></a>
                    <div class="image-text">KOREA</div>
                </div>
            </div>
        </div>
        <div class="padding"></div>

        <footer class="page-footer">
            <div class="footer-content container-fluid">
                <div class="row">
                    <div class="col-md-12 py-5"> 
                        <a href="https://www.facebook.com/john.song.5264382"><i class="fab fa-facebook" ></i></a>
                        <a href="https://www.instagram.com/john_song_/"><i class="fab fa-instagram"></i></a>
                        <a href="https://github.com/jarhun88"><i class="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/channel/UCSJrG7j5AwuUcoD9hLetkmw?view_as=subscriber"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    import Title from "./components/Title.vue";
    import FeaturedPage from "./components/FeaturedPage.vue";

    export default {
        name: 'MainPage',
        components: {
            Title,
            FeaturedPage
        },
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .container-fluid {
        padding: 0;
    }

    .intro-box {
        height: 45vh;
        min-height: 350px;
        max-height: 550px;
        display: flex;
        align-items: center;
    }

    .padding {
        height: 70px;
    }

    @media screen and (max-width: 768px) {
        .intro-box {
            margin-top: 150px;
            margin-bottom: 80px;
        }
    }

    @media screen and (max-width: 450px) {
        .intro-box {
            margin-top: 200px;
            margin-bottom: 100px;
        }
    }

    .text-box {
        padding-top: 5%;
        display: flex;
        align-items: center;
        text-align: left;
        flex-direction: column;
        color: black;
    }

    .text-box-2 {
        color: white;
        display: flex;
        text-align: left;
        display: flex;
        flex-direction: column;
        margin-bottom: 310px;
        padding-left: 40px;
        padding-top: 10px;
    }

    .profile-pic {
        height: 300px;
        width: 300px;
        border-radius: 50%;
    }

    .latest-feed {
        height: 90vh;
        min-height: 550px;
    }

    .latest-feed-title {
        font-size: 50px;
    }

    @media screen and (max-width: 768px) {
        .latest-feed {
            height: 100vh;
            min-height: 400px;
        }

        .second-picture {
            background-image: url("./images/body.jpg");
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .text-box-2 {
            height: 40%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 0px;
        }

        .latest-feed-title {
            position: relative;
            bottom: 50px;
        }

        .latest-feed-para {
            position: relative;
            bottom: 50px;
            text-align: left;
        }

        .video-box {
            position: relative;
            bottom: 100px;
        }

        .iframe {
            min-height: 250px;
            min-width: 400px;
        }
    }

    @media screen and (max-height: 736px) {
        .video-box {
            position: relative;
            top: 0px;
        }

        .iframe {
            height: 300px;
            width: 200px;
        }
    }

    .profile-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .latest-feed-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .second-picture {
        background-image: url("./images/body.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }


    div>iframe {
        width: 80%;
        height: 80%;
        max-width: 550px;
        max-height: 350px;
        padding: 20px;
    }

    .col-md {
        padding: 0px;
    }

    .video-box {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .row {
        height: 100%;
    }

    h1 {
        font-size: 50px;
        margin: 0px;
    }

    /* .posts {
        height: 70vh;
    } */

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
        color:white;
    }

    a:hover {
        opacity: 0.5;
    }
</style>