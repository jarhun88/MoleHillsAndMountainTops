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
                <p>In the past, I had already set my own limits on how far I could go. No, I would never be able to
                    accomplish that, that's for
                    <strong>smarter people,</strong> or <strong>stronger people.</strong>
                </p>
                <p>But through each journey I take, I learn that I am capable of more than I ever imagined of myself.
                    I hope that my page can inspire you to <strong>go beyond </strong> what you believe you are capable
                    of!
                </p>
            </div>
            <div class="buttons-box">
                <div class="button-box">
                    <a href="https://www.youtube.com/watch?v=isLM2Uj-NRw&list=PLDGUqX4VZvGvk-e-fn_elGwQWHtd3PTwu">
                        <button type="button" class="btn btn-outline-primary">Travel Videos</button>
                    </a>
                </div>
                <div class="button-box">
                    <a href="https://medium.com/@likisongproduct">
                        <button type="button" class="btn btn-outline-primary">Hiking Blogs</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        margin-top: 5%;
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
        font-size: 1.25rem;
    }

    .buttons-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .button-box {
        margin: 20px;
        padding-bottom: 50px;
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