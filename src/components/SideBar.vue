<template>
<div class="sidebar-box">
  <v-card class="list">
      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <i class="fab fa-facebook"></i>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <i class="fab fa-instagram"></i>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <i class="fab fa-github"></i>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <i class="fab fa-youtube"></i>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
  </v-card>
  </div>
</template>

<script>
    export default {
        name: 'SideBar',
        props: {
        }
    }
</script>

<style scoped>

    a {
        color: white;
    }

    a:hover {
        opacity: 0.5;
    }

    .sidebar-box {
      width: 100%;
      height: 100%;
    }

    .fab {
        padding: 10px;
        font-size: 20px;
    }

    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

</style>