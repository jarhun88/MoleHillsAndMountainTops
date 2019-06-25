<template>
    <div class="main-page">
        <div class="container-fluid page-header">
            <!-- <div class="background"></div> -->
        </div>

        <div class="padding"></div>

        <div class="intro-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 profile-box">
                        <img src="../john.jpeg" class="profile-pic" alt="Picture of John" width="304px"
                            height="236px" />
                    </div>
                    <div class="col-md-6 text-box">
                        <p>Hello! I'm Jaehun, currently a student at the University of British Columbia. </p>
                        <p>Recently, I've had the opportunity to travel to many different
                            countries and exposure to many new cultures. I created this page as a means to showcase
                            my personal experiences. I hope you enjoy your stay!</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="padding"></div>

        <div class="latest-feed">
            <div class="second-picture">
                <div class="row">
                    <div class="col-md-6 latest-feed-box">
                        <div class="text-box-2">
                            <div class="latest-feed-title">
                                <h1>Reuniting with old faces</h1>
                            </div>
                            <div class="latest-feed-para">
                                <p>I recently had the opportunity to go back to my hometown Busan, in South
                                    Korea. To be able to reconnect
                                    with my family and my culture was an unforgettable experience.
                                </p>
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
                    <img class="image" src="../taiwan.jpg" />
                    <div class="image-text">TAIWAN</div>
                </div>
                <div class="image-box">
                    <img class="image" src="../singapore.jpg" />
                    <div class="image-text">SINGAPORE</div>
                </div>
                <div class="image-box">
                    <img class="image" src="../thailand.jpeg" />
                    <div class="image-text">THAILAND</div>
                </div>
                <div class="image-box">
                    <img class="image" src="../japan.jpg" />
                    <div class="image-text">JAPAN</div>
                </div>
                <div class="image-box">
                    <img class="image" src="../korea.jpg" />
                    <div class="image-text">KOREA</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainPage',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-fluid {
        padding: 0;
    }

    .page-header {
        height: 80vh;
        min-height: 550px;
        max-height: 650px;
        background-image: url("pic.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(80%);
    }

    .intro-box {
        /* padding: 70px; */
        /* use 30% for small size */
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
        text-align: center;
        flex-direction: column;
        color: black;
    }

    .text-box-2 {
        color: white;
        display: flex;
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 310px;
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

    @media screen and (max-width: 768px) {
        .latest-feed {
            height: 100vh;
            min-height: 400px;
        }

        .second-picture {
            background-image: url("../body.jpg");
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
        }

        .video-box {
            position: relative;
            bottom: 100px;
        }

        .iframe {
            width: 100%;
            max-height: 400px;
            height: 100%;
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
        background-image: url("../body.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        /* filter: brightness(50%); */
    }


    div > iframe {
        width: 100%;
        height: 80%;
        max-width: 600px;
        max-height: 400px;
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
    }

    .posts {
        height: 70vh;
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
</style>