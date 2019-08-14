<template>
    <div class="container-fluid intro-box">
        <div class="text-box">
            <div class="sub-title">
                <h4>Inspiration</h4>
            </div>
            <div class="title">
                “Adventure is worthwhile.” <br />– Aesop
            </div>
            <div class="para">
                <p> Travel has opened my eyes <strong> beyond the scope </strong> of what I initally believed to be my
                    world.
                    It has taught me confidence, the fortitude to overcome obstacles, and a <strong> thankful </strong>
                    and
                    <strong> humble </strong> mentality.
                </p>
            </div>
            <div class="current">
                <button type="button" class="btn btn-outline-primary">Explore with me</button>
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
    .intro-box {
        padding: 0px;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .sub-title {
        font-family: 'Saira Extra Condensed', sans-serif;
        padding-left: 20%;
        padding-right: 20%;
        font-size: 1.25rem;
        color: #147ED7;
    }

    .title {
        margin: 1%;
        font-size: 3.75rem;
        font-family: 'Saira Semi Condensed', sans-serif;
        font-weight: bold;
        color: black;
        padding-left: 20%;
        padding-right: 20%;
    }

    .para {
        font-family: 'Trebuchet MS';
        margin: 1%;
        padding-left: 20%;
        padding-right: 20%;
        font-size: 1.25rem;
        color: #908E8E;
    }

    p {
        margin: 0px;
        font-size: 1.25rem;
    }

    .current {
        margin-top: 10%;
        font-size: 1.25rem;
        font-family: 'Trebuchet MS';
    }

    .profile-box {
        margin-top: 10vh;
        height: 30%;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 70%;
        margin: 5%;
    }

    .text {
        margin: auto;
    }

    strong {
        color: black;
    }

    .btn {
        color: #147ED7;
    }

    /* .profile-pic {
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 50%;
    }

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
    } */

    /* .text-box {
        color: white;
        display: flex;
        text-align: left;
        display: flex;
        flex-direction: column;
        margin-bottom: 310px;
        padding-left: 40px;
        padding-top: 10px;

    } */
    /* 
    @media screen and (max-width: 767px) {
        .text-box {
            align-items: flex-start;
            margin-bottom: 0px;
            padding: 0px;
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
            padding-left: 0px;
        }
    } */
</style>

<!-- <div class="fp"> -->
<!-- <img class="background-featured-photo" src="../images/body.jpg" /> -->
<!-- <div class="row position-box">
            <div class="col-md-6 ">
                <div class="text-box">
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
        </div> -->