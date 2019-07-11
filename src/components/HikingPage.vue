<template>
    <div class="hiking-page">
        <img class="background-hike-photo" src="../images/hike.jpg" />
        <div class="row position-box">
            <div class="col-md-6 hike-box">
                <div class="text-box-2">
                    <div class="hike-title">My Treks</div>
                    <div class="hike-subtitle">Go Explore</div>
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
        position: relative;
        text-align: center;
        height: 100%;
    }

    .background-hike-photo {
        width: 100%;
        height: 600px;
        /* min-height: 550px; */
        object-fit: cover;
    }

    .position-box {
        position: absolute;
        top: 8px;
        left: 16px;
    }

    .hike-title {
        font-size: 50px;
    }

    .hike-subtitle {
        padding-top: 8px;
        padding-bottom: 8px; 
        font-size: 16px; 
    }

    .hike-box {
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
        .hike-box {
            height: auto;
            min-height: 400px;
        }

        .text-box-2 {
            /*  height: 40%; */
            display: flex;
            align-items: flex-start;
            margin-bottom: 0px;
        }

        .hike-title {
            position: relative;
            bottom: 50px;
        }

        .hike-subtitle {
            padding-top: 8px;
            padding-bottom: 8px; 
            font-size: 16px; 
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

    @media screen and (max-width: 432px) {
        .background-hike-photo {
            width: 100%;
            height: 750px;
        }
        .text-box-2 {
            padding: 0px;
        }
    }
</style>