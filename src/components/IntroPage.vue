<template>
    <div class="container-fluid intro-box">
        <div class="profile-box">
            <img src="../images/me.jpg" class="profile-pic" alt="Picture of John" />
        </div>

        <div class="text-box">
            <div class="sub-title">
                <h4>Why Do I Travel?</h4>
            </div>
            <div class="title">
                I Love Experiencing <br /> New Cultures and Ideas!
            </div>
            <div class="para">
                <p>
                    My Favourite part of traveling is that I get to observe and experience different people
                    and their cultures; <strong>beliefs</strong> and <strong>concepts</strong> that I never would have come up with on my own. 
                    I like to think I add a little bit of their culture into myself in order to become a more <strong>well rounded </strong>
                    individual. Plus I love trying new <strong>FOOD.</strong>
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
        height: 225px;
        width: 225px;
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