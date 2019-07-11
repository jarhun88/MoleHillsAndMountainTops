<template>
    <div class="container intro-box">
        <div class="row">
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
        </div>
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
        display: flex;
        align-items: center;
    }

    .row {
        padding: 5%;
        width: auto;
    }

    .profile-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-box {
        display: flex;
        text-align: left;
        flex-direction: column;
        color: black;
        text-align: center;
    }

    .text {
        margin: auto;
    }

    .profile-pic {
        height: 300px;
        width: 300px;
        border-radius: 50%;
    }

    @media screen and (max-width: 768px) {
        .grid {
            padding: 5%;
        }
    }
</style>