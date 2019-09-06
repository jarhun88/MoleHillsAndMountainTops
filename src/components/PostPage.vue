<template>
    <div class="posts">
        <div class="card-container">
            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157710668016766">
                    <img class="card-img-top" id="hi" src="../images/peru.jpg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Peru</h5>
                    <p class="card-description">A Country of Diverse Landscapes and Rich Colonial History</p>
                    <p class="card-text"><small class="text-muted">08/18/2019 - 09/1/2019</small></p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252661703">
                    <img class="card-img-top" src="../images/taiwan.jpg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Taiwan</h5>
                    <p class="card-description">Birthplace of the Internationally famous Bubble Tea.</p>
                    <p class="card-text"><small class="text-muted">06/13/2019 - 06/17/2019</small></p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252817771">
                    <img class="card-img-top" src="../images/singapore.jpg" alt="Card image cap">
                </a>

                <div class="card-body">
                    <h5 class="card-title">Singapore</h5>
                    <p class="card-description">The Impeccably Neat City State of Tomorrow.</p><br>
                    <p class="card-text"><small class="text-muted">06/12/2019</small></p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709252746627">
                    <img class="card-img-top" src="../images/thailand.jpeg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Thailand</h5>
                    <p class="card-description">Home to Vast Beaches and Urban Sprawl.</p><br>
                    <p class="card-text"><small class="text-muted">06/05/2019 - 06/12/2019</small></p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253151606">
                    <img class="card-img-top" src="../images/japan.jpg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Japan</h5>
                    <p class="card-description">A Country of Technological Advancement and Ancient Heritage.</p>
                    <p class="card-text"><small class="text-muted">05/28/2019 - 06/05/2019</small></p>
                </div>
            </div>

            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771">
                    <img class="card-img-top" src="../images/korea.jpg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Korea</h5>
                    <p class="card-description">A place of Culturally Energetic and Electric People.</p>
                    <p class="card-text"><small class="text-muted">04/28/2019 - 05/28/2019</small></p>
                </div>
            </div>

            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771">
                    <img class="card-img-top" src="../images/sf.jpg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">USA</h5>
                    <p class="card-description">The Patriotic Country Which Never Sleeps.</p><br>
                    <p class="card-text"><small class="text-muted">04/28/2019 - 05/28/2019</small></p>
                </div>
            </div>

            <div class="card">
                <a href="https://www.flickr.com/photos/182220016@N07/albums/72157709253333771">
                    <img class="card-img-top" src="../images/van.jpeg" alt="Card image cap">
                </a>
                <div class="card-body">
                    <h5 class="card-title">Canada</h5>
                    <p class="card-description">The True North Strong and Free.</p><br>
                    <p class="card-text"><small class="text-muted">04/28/2019 - 05/28/2019</small></p>
                </div>
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
    .posts {
        height: 100%;
    }

    .sub-title {
        margin-top: 60px;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        padding-left: 1%;
        padding-right: 1%;
    }

    .image {
        /* height: 300px; */
        opacity: 0.95;
        filter: brightness(80%);
        object-fit: cover;
    }

    .image-box {
        padding: 2%;
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

    .card-img-top {
        position: relative;
        /* object-fit: cover; */
        height: 320px;
        opacity: 0.95;
        filter: brightness(80%);
    }

    .card {
        padding: 1px;
        width: 25%;
        border: none;
        margin-bottom: 2%;
    }

    .card-title {
        font-family: 'Saira Extra Condensed';
        font-size: 1.4rem;
        margin: 25px;
        color: #147ED7;
    }

    .card-description {
        font-weight: bold;
        font-size: 1.3rem;
    }

    a:hover {
        filter: brightness(40%);
    }

    @media screen and (max-width: 1100px) {
        .card {
            width: 33.33%;
        }
    }

    @media screen and (max-width: 950px) {
        .card {
            width: 50%;
        }
    }

    @media screen and (max-width: 600px) {
        .card {
            width: 400px;
        }

        .card-title {
            font-size: 2rem;
        }

        .posts {
            height: 400vh;
        }
    }
</style>