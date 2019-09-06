<template>
    <div class="container-fluid featured-box">
        <div class="text-box">
            <div class="title-box">
                <div class="sub-title">
                    <h4>Inspiration</h4>
                </div>
                <div class="title">
                    “Adventure is worthwhile.” <br />– Aesop
                </div>
            </div>
            <div class="para">
                <p> Travelling has opened my eyes <strong> beyond the scope </strong> of what I initally imagined to be
                    my world. Through my experiences, I have gained self confidence, the fortitude to overcome challenging obstacles, and a renewed <strong> respect </strong>
                    and <strong> humility </strong> towards the world.
                </p>
            </div>
            <div class="current">
                <button type="button" class="btn btn-outline-primary" @click="scroll">Explore with me</button>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'FeaturedPage',
        props: {
        },
        methods: {
            scroll() {
                // alert("hel");
                window.location.hash = "hi";
                window.location.hash = "";
            },
        }
    }
</script>

<style scoped>
    .featured-box {
        padding: 0px;
        height: 100%;
        background-color: #f7f9fd;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100%;
        margin: 8%;
    }

    .title-box {
        margin: 5%;
    }

    .sub-title {
        font-family: 'Saira Extra Condensed', sans-serif;
        padding-left: 20%;
        padding-right: 20%;
        font-size: 1.25rem;
        color: #147ED7;
        margin: 2%;
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
        margin-top: 5%;
        font-size: 1.25rem;
        font-family: 'Trebuchet MS';
    }

    .profile-box {
        margin-top: 10vh;
        height: 30%;
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

    @media screen and (max-width: 500px) {
        .title {
            font-size: 2.5rem;
            padding-left: 0px;
            padding-right: 0px;
            margin: 6%;
        }

        .title-box {
            margin-top: 10%;
            margin-bottom: 5%;
        }

        .intro-box {
            height: 110vh;
        }
    }
</style>