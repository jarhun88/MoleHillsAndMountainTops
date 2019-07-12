<template>
    <div class="fp">
        <img class="background-featured-photo" src="../images/body.jpg" />
        <div class="row position-box">
            <div class="col-md-6 ">
                <div class="text-box-2">
                    <div class="fp-title">A Family Reunion</div>
                    <div class="fp-subtitle">Go Learn</div>
                    <div class="fp-para">
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
</template>

<script>
    export default {
        name: 'FeaturedPage',
        props: {
        }
    }
</script>

<style scoped>
    .fp {
        position: relative;
        text-align: center;
        height: 100%;
    }

    .fp-title {
        font-size: 50px;
    }

    .fp-subtitle {
        padding-top: 8px;
        padding-bottom: 8px; 
        font-size: 16px; 
    }

    .fp-para {
        font-size: 20px;
    }

    .background-featured-photo {
        width: 100%;
        height: 600px;
        object-fit: cover;
    }

    .position-box {
        position: absolute;
        top: 8px;
        left: 16px;
    }

    iframe {
        width: 100%;
        height: 60%;
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

    @media screen and (max-width: 767px) {
        .text-box-2 {
            align-items: flex-start;
            margin-bottom: 0px;
        }

        .fp-title {
            position: relative;
        }

        .fp-para {
            position: relative;
            text-align: left;
        }

        iframe {
            width: 70%;
            height: 100%;
            min-width: 300px;
            min-height: 250px;
            padding-bottom: 100px;
        }
    }

</style>