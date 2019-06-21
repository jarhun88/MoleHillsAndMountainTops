<template>
    <div class="container-fluid">
        <div class="page-header">
                <div class="background"></div>      
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
    height: 90vh;
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
</style>
