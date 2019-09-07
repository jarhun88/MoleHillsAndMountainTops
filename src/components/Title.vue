<template>
    <div>
        <div class="container-fluid page-header">
            <div class="title">MoleHills&MountainTops</div>
            <div class="preview">Travel KeepSakes</div>
        </div>
        <div class="bottom-bar">
            <p>Scroll Down</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Title',
        props: {
        }
    }
</script>

<style scoped>
    .page-header {
        height: 90vh;
        min-height: 550px;
        background-image: url("../images/pic.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(90%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .title {
        font-size: 5rem;
        top: 100px;
        font-family: 'Saira Semi Condensed', sans-serif;
        font-weight: bold;
        color: #FFFFFF;
    }

    .preview {
        font-family: 'Ubuntu Mono', monospace;
        font-size: 25px;
        display: flex;
        justify-content: center;
        color: #FFFFFF;
    }

    .bottom-bar {
        font-family: 'Ubuntu Mono', monospace;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #C6C6C6;
        border-bottom: 1px solid #E4E5E5;
    }

    p {
        margin-bottom: 5px;
        text-align: center;
    }

    @media screen and (max-width: 867px) {
        .title {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 535px) {
        .title {
            font-size: 2rem;
        }
    }
</style>