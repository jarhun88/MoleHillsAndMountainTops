<template>
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
</template>

<script>
    export default {
        name: 'FeaturedPage',
        props: {
        }
    }
</script>

<style scoped> 

.latest-feed {
        height: 90vh;
        min-height: 550px;
    }

    .latest-feed-title {
        font-size: 50px;
    }

    .latest-feed-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .second-picture {
        background-image: url("../images/body.jpg");
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

    .video-box {
        display: flex;
        align-items: center;
        justify-content: center;
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

    @media screen and (max-width: 768px) {
        .latest-feed {
            height: 100vh;
            min-height: 400px;
        }

        .second-picture {
            background-image: url("../images/body.jpg");
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



</style>