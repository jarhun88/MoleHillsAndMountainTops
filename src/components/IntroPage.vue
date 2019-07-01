<template>
    <div class="intro-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 profile-box">
                        <img src="../images/john.jpeg" class="profile-pic" alt="Picture of John" width="304px"
                            height="236px" />
                    </div>
                    <div class="col-md-6 text-box">
                        <p>Hello! I'm Jaehun, currently a student at the University of British Columbia. </p>
                        <p>Some facts about me: I love outdoor activities such as climbing, skiing and hiking, 
                            I enjoy playing music and trying different cultural foods. I created this page as a 
                            means to showcase my travels as well as my personal experiences. I hope you enjoy your stay!</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'introPage',
        props: {
        }
    }
</script>

<style scoped> 

    .intro-box {
        height: 45vh;
        min-height: 350px;
        max-height: 550px;
        display: flex;
        align-items: center;
    }

    .profile-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-box {
        padding-top: 5%;
        display: flex;
        align-items: center;
        text-align: left;
        flex-direction: column;
        color: black;
    }

    .profile-pic {
        height: 300px;
        width: 300px;
        border-radius: 50%;
    }

</style>