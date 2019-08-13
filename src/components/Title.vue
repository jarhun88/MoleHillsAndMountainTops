<template>
    <div>
        <div class="container-fluid page-header">
            <div class="title">MoleHills&MountainTops</div>
            <div class="preview">A Self Blog for Remembrance</div>
        </div>
        <div class="bottom-bar">
            <p>Scroll for more</p>
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
        display: flex;
        justify-content: center;
    }

    .bottom-bar {
        font-family: 'Ubuntu Mono', monospace;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DBDCDC;
        border-bottom: 1px solid #E4E5E5;
    }

    p {
        margin-bottom: 5px;
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        .title {
            font-size: 8vw;
        }
    }
</style>