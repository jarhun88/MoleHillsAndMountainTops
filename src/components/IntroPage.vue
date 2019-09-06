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
                    <strong> any regrets. </strong>
                </p>
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

    .profile-box {
        margin: 3%;
        padding-top: 2%;
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

    @media screen and (max-width: 960px){
        .title{
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 586px){
        .title{
            font-size: 2rem;
        }

        .profile-box {
            margin: 10%;
        }

        .current {
        margin: 10%;
        padding: 0px;
    }
    }

</style>