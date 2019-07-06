<template>
    <div class="hiking-page">
        <div class="background-hike-photo">
            <div class="row">
                <div class="col-md-6 latest-feed-box">
                    <div class="text-box-2">
                        <div class="latest-feed-title">
                            Hiking the World
                        </div>
                        <div class="hiking-para">
                            Hiking has been an activity I've come to appreciate more and more as it gives me a temporary 
                            respite from the stresses of my day to day, and allows me to really live just in the moment. 
                            It's a truly meditative feeling where I can allow myself to explore creative avenues, or just 
                            not think at all while taking in the breathtaking nature that I surround myself with. 
                        </div>
                        <div class="button-box">
                            <a href="https://medium.com/@likisongproduct/"><button type="button" class="btn btn-light">Explore with me</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HikingPage',
        props: {
        }
    }
</script>

<style scoped>

    .hiking-page {
        height: 40vh;
        min-height: 550px;
    }

    .background-hike-photo {
        background-image: url("../images/hike.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .latest-feed-title {
        font-size: 50px;
    }

    .latest-feed-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-box-2 {
        color: white;
        display: flex;
        text-align: left;
        display: flex;
        flex-direction: column;
        margin-bottom: 310px;
        padding-left: 40px;
        padding-top: 10px;
    }

    .button-box {
        margin-top: 1%;
        padding: 8px;
        display: flex;
        justify-content: left;
    }

    .hiking-para {
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        .latest-feed {
            height: 100vh;
            min-height: 400px;
        }

        .text-box-2 {
            /*  height: 40%; */
            display: flex;
            align-items: flex-start;
            margin-bottom: 0px;
        }

        .latest-feed-title {
            position: relative;
            bottom: 50px;
        }

        .hiking-para {
            position: relative;
            bottom: 50px;
            text-align: left;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 432px){
        .text-box-2 {
            margin-top: 50px;
        }
    }



</style>