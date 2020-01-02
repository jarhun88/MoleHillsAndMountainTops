<template>
    <div class="map">
        <div class="left-box">
            <Showcase />
        </div>
        <div class="right-box">
            <div class="gmap-box">
                <Map />
            </div>
            <div class="sidebar-box">
                <SideBar />
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from './SideBar.vue'
    import Map from './Map.vue'
    import Showcase from './Showcase.vue'

    export default {
        name: 'MainPage',
        components: {
            SideBar,
            Map,
            Showcase
        },

        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }

</script>

<style>
    .map {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .travel-box {
        height: 33.33%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .left-box {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
    }

    .right-box {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    .gmap-box {
        width: 85%;
        height: 100%;
    }

    .sidebar-box {
        width: 15%;
        height: 100%;
        min-width: 75px;
    }

    .fab {
        font-size: 600%;
    }
</style>