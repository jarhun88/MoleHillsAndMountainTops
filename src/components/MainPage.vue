<template>
    <div class="main-page">
        <div class="header">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="background"></div>      
                </div> 
            </div>
        </div>
        
        <div class="intro">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src="../john.jpeg" class="profile-pic" alt="Picture of John" width="304px" height="236px"/>
                    </div>
                    <div class="col-sm">
                    <div class="intro">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                        </div>
                    </div>
                </div>
            </div>
        </div>
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

.page-header {
    height: 70vh;
    min-height: 250px;
    /* max-height: 350px; */
}

.background {
    background-image: url("pic.jpg");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.intro {
    margin: 8%;
}

.profile-pic {
    height: 350px;
    width: 370px;
    border-radius: 50%;
}


</style>
