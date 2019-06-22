<template>
    <div class="main-page">
        <div class="header">
            <div class="container-fluid page-header">
                <div class="background"></div>
            </div>
        </div>

        <div class="intro-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 profile-box">
                        <img src="../john.jpeg" class="profile-pic" alt="Picture of John" width="304px"
                            height="236px" />
                    </div>
                    <div class="col-md-6">
                        <div class="text-box">
                            <p>Hello! I'm Jaehun, currently a student at the University of British Columbia. Over the years I've had the opportunity to travel to many different 
                                countries and exposure to many new cultures. I created this page as a means to showcase my personal experiences. I hope you enjoy your stay! 
                                 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div class="body-box">
            <div class="container-fluid">
                <div class="picture-box">
                    <div class="second-picture">
                        gdgfdsgsdgsfd
                        <div class="row">
                            <div class="col-sm">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'MainPage',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-fluid {
        padding: 0;
    }

    .header {
        /* margin-bottom: 8%; */
    }

    .page-header {
        height: 70vh;
        min-height: 250px;
        max-height: 350px;
    }


    .background {
        background-image: url("pic.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .intro-box {
        margin-top: 10px;
        /* use 30% for small size */
        height: 60vh;
        min-height: 300px;
        max-height: 400px;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        .intro-box {
            margin-top: 150px;
            /* height: 60vh;
            min-height: 300px;
            max-height: 400px;
            display: flex;
            align-items: center; */
        }
    }

    @media screen and (max-width: 450px) {
        .intro-box {
            margin-top: 200px;
        }
    }

    .text-box {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 8%;
    }

    /* 
    .body-box {
        margin: 8%;
    } */

    .profile-pic {
        height: 300px;
        width: 300px;
        border-radius: 50%;
    }

    .picture-box {
        height: 80vh;
        min-height: 250px;
    }

    .profile-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .second-picture {
        background-image: url("../body.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .col-md {
        padding: 0px;
    }
</style>