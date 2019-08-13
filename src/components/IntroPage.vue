<template>
    <div class="container-fluid intro-box">
        <div class="profile-box">
            <img src="../images/me.jpg" class="profile-pic" alt="Picture of John" />
        </div>

        <div class="text-box">
            <div class="sub-title">
                <h4>My personal mandate</h4>
            </div>
            <div class="title">
                Experience everything <br />life has to offer.
            </div>
            <div class="para">
                <p>There are so many things I want to see and learn in my life.
                    60 years from now, I want to be able to look back on all my accomplishments and experiences without
                    a single regret.
                </p>
            </div>
            <div class="current">
                What I'm up to right now: _________
            </div>
        </div>

        <!-- <div class="row">
            <div class="col-md-6 profile-box grid">
                <img src="../images/john.jpeg" class="profile-pic" alt="Picture of John" width="304px" height="236px" />
            </div>
            <div class="col-md-6 text-box grid">
                <div class="text">
                    <p>Hello! I'm Jaehun, currently a student at the University of British Columbia. </p>
                    <p>Some facts about me: I love outdoor activities such as climbing, skiing and hiking,
                        I enjoy playing music and trying different cultural foods. I created this page as a
                        means to showcase my travels as well as my personal experiences. I hope you enjoy your stay!</p>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'IntroPage',
        props: {
        }
    }
</script>

<style scoped>
    .intro-box {
        /* margin: 100px; */
        padding: 0px;
        height: 120vh;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
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
        height: 15%;
        margin: 3%;
        padding-left: 20%;
        padding-right: 20%;
        border-bottom: 1px solid #E4E5E5;
        font-size: 1.25rem;
        font-family: 'Trebuchet MS';
    }

    .row {
        padding: 5%;
        width: auto;
    }

    .profile-box {
        margin-top: 10vh;
        height: 30%;
        /* display: flex;
        align-items: center;
        justify-content: center; */
    }

    .text-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 70%;
    }

    .text {
        margin: auto;
    }

    .profile-pic {
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 50%;
    }

    @media screen and (max-width: 768px) {
        .grid {
            padding: 5%;
        }
    }
</style>