<template>
    <div class="posts">
        <!-- <div class="sub-title">
            <h3>Latest Destinations</h3>
        </div> -->
        <div class="images">
            <div class="image-box">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252661703"><img class="image" src="../images/taiwan.jpg" /></a>
                <div class="image-text">TAIWAN</div>
            </div>
            <div class="image-box">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252817771"><img class="image" src="../images/singapore.jpg" /></a>
                <div class="image-text">SINGAPORE</div>
            </div>
            <div class="image-box">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252746627"><img class="image" src="../images/thailand.jpeg" /></a>
                <div class="image-text">THAILAND</div>
            </div>
            <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253151606"><img class="image" src="../images/japan.jpg" /></a>
                <div class="image-text">JAPAN</div>
            </div>
            <div class="image-box">
                    <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771"><img class="image" src="../images/korea.jpg" /></a>
                <div class="image-text">KOREA</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostPage',
        props: {
        }
    }
</script>

<style scoped>

    .sub-title {
        margin-top: 60px;
    }

    .images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .image {
        height: 400px;
        width: 400px;
        padding: 5%;
        opacity: 0.95;
        filter: brightness(80%);
    }

    .image-box {
        position: relative;
        text-align: center;
        color: white;
    }

    .image-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-family: Helvetica;
        font-weight: bold;
    }

</style>