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
        height: 100%;
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
        margin: 10%;
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

    @media screen and (max-width: 500px){
        .title {
            font-size: 2.5rem;
        }

        .intro-box {
            height: 110vh;
        }
    }

</style>
