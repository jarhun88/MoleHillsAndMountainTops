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
                <p>There are so many things I want to <strong> see and learn </strong>in my life.
                    60 years from now, I want to be able to look back on all my accomplishments and experiences without
                    <strong>  a single regret. </strong>
                </p>
            </div>
            <div class="current">
                What I'm up to right now: _________
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
        padding: 0px;
        height: 120vh;
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
        height: 10%;
        margin: 3%;
        padding-left: 20%;
        padding-right: 20%;
        border-bottom: 1px solid #E4E5E5;
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
    }

    .text {
        margin: auto;
    }

    strong {
        color: black;
    }

    .profile-pic {
        height: 200px;
        width: 200px;
        overflow: hidden;
        border-radius: 50%;
    }

</style>