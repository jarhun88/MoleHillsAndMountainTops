<template>
    <div class="container-fluid page-header">
        <div class="title-box">
            <div class="title">MoleHills&MountainTops</div>
            <div class="preview">Things I've done and seen</div>
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
        height: 80vh;
        min-height: 550px;
        max-height: 650px;
        background-image: url("../images/pic.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        filter: brightness(80%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
    }

    .title {
        font-size: 60px;
        top: 100px;
        font-family: 'Saira Semi Condensed', sans-serif;
        font-weight: bold;
    }

    .preview {
        font-family: 'Ubuntu Mono', monospace;
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 8vw;
        }
    }


</style>