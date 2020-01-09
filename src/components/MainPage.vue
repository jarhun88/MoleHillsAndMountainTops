<template>
    <div class="map">
        <div class="left-box">
            <div class="top-bar">
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Korea, items.Korea, KoreaLink)" rounded depressed class="button"
                        width="150px" color=#C5C5C5>
                        Korea</v-btn>
                </div>
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Japan, items.Japan, JapanLink)" rounded depressed class="button"
                        width="150px" color=#C5C5C5>
                        Japan</v-btn>
                </div>
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Peru, items.Peru, PeruLink)" rounded depressed class="button"
                        width="150px" color=#C5C5C5>
                        Peru</v-btn>
                </div>
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Thailand, items.Thailand, ThailandLink)" rounded depressed
                        class="button" width="150px" color=#C5C5C5>Thailand</v-btn>
                </div>
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Hawaii, items.Hawaii)" rounded depressed class="button"
                        width="150px" color=#C5C5C5>Hawaii</v-btn>
                </div>
                <div class="button-box">
                    <v-btn v-on:click="setActiveTravel(Singapore, items.Singapore, SingaporeLink)" rounded depressed
                        class="button" width="150px" color=#C5C5C5>Singapore</v-btn>
                </div>
            </div>
            <v-divider class="mx-4"></v-divider>
            <div class="bottom-bar">
                <div class="wrapper-box">
                    <div class="photo1-box">
                        <v-carousel :show-arrows="false" height="100%" cycle hide-delimiter-background>
                            <v-carousel-item contain v-for="(item,i) in activeImages" :key="i" :src="item.src">
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="detail-box">
                        <div class="button-box">
                            <v-btn v-on:click="show(description)" rounded depressed class="button" width="150px"
                                color=#C5C5C5>
                                About
                                {{activeTravel}}</v-btn>
                        </div>
                        <div class="button-box">
                            <v-btn v-bind:href="activeLink" rounded depressed class="button" width="150px"
                                color=#C5C5C5>Gallery</v-btn>
                        </div>
                    </div>
                </div>
                <modals-container />
            </div>
        </div>
        <div class="right-box">
            <div class="gmap-box">
                <Map v-bind:pan="start" v-bind:zoom="zoom"/>
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

    export default {
        name: 'MainPage',
        components: {
            SideBar,
            Map,
        },

        data() {
            return {
                zoom: 3,
                start: {
                    lat: 10.3157,
                    lng: 123.8854
                },

                activeImages: [
                    {
                        src: require('../images/korea.jpg')
                    },
                    {
                        src: require('../images/taiwan.jpg')
                    },
                    {
                        src: require('../images/singapore.jpg')
                    },
                    {
                        src: require('../images/thailand.jpg')
                    },
                ],

                items: {
                    Korea: {
                        images: [
                            {
                                src: require('../images/korea2.jpg')
                            },
                            {
                                src: require('../images/korea3.jpg')
                            },
                        ],
                        coords: {
                            lat: 37.566536,
                            lng: 126.977966
                        }
                    },
                    Japan: {
                        images: [
                            {
                                src: require('../images/japan.jpg')
                            },
                            {
                                src: require('../images/japan2.jpg')
                            },
                            {
                                src: require('../images/japan3.jpg')
                            }
                        ],
                        coords: {
                            lat: 35.689487,
                            lng: 139.691711
                        }
                    },
                    Peru: {
                        images: [
                            {
                                src: require('../images/peru.jpg')
                            },
                            {
                                src: require('../images/macchupicchu.jpg')
                            },
                            {
                                src: require('../images/desert.jpg')
                            },
                            {
                                src: require('../images/colcacanyon.jpg')
                            },
                            {
                                src: require('../images/rainbowmountain.jpg')
                            },
                            {
                                src: require('../images/casa.jpg')
                            }
                        ],
                        coords: {
                            lat: -14.0875,
                            lng: -75.7626
                        }
                    },
                    Thailand: {
                        images: [
                            {
                                src: require('../images/thailand.jpg')
                            },
                            {
                                src: require('../images/thailand1.jpg')
                            },
                            {
                                src: require('../images/thailand4.jpg')
                            }
                        ],
                        coords: {
                            lat: 13.756331,
                            lng: 100.501762
                        }
                    },
                    Singapore: {
                        images: [
                            {
                                src: require('../images/singapore.jpg')
                            },
                            {
                                src: require('../images/singapore1.jpg')
                            },
                            {
                                src: require('../images/singapore2.jpg')
                            },
                            {
                                src: require('../images/singapore3.jpg')
                            }
                        ],
                        coords: {
                            lat: 1.352083,
                            lng: 103.819839
                        }
                    },
                    Hawaii: [
                        {
                            src: require('../images/peru.jpg')
                        },
                        {
                            src: require('../images/taiwan.jpg')
                        },
                        {
                            src: require('../images/singapore.jpg')
                        },
                        {
                            src: require('../images/thailand.jpg')
                        }
                    ]

                },
                activeLink: "https://www.flickr.com/photos/182220016@N07/albums/72157710668016766",
                KoreaLink: "https://www.flickr.com/photos/182220016@N07/albums/72157709253333771",
                JapanLink: "https://www.flickr.com/photos/182220016@N07/albums/72157709253151606",
                PeruLink: "https://www.flickr.com/photos/182220016@N07/albums/72157710668016766",
                ThailandLink: "https://www.flickr.com/photos/182220016@N07/albums/72157709252746627",
                HawaiiLink: "",
                SingaporeLink: "https://www.flickr.com/photos/182220016@N07/albums/72157709252817771",

                activeTravel: this.Korea,
                Korea: "Korea",
                Japan: "Japan",
                Peru: "Peru",
                Thailand: "Thailand",
                Hawaii: "Hawaii",
                Singapore: "Singapore",

                description: {
                    header: "Peru",
                    para: "hello"
                }
            }
        },
        methods: {

            show(description) {
                this.$modal.show({
                    template: `
            <div>
            <h1>{{ header }}</h1>
            <p>{{ para }}</p>
            </div>`,
                    props: ['header', 'para']
                }, {
                    header: description.header,
                    para: description.para
                }, {
                    height: 'auto'
                }, {
                    'before-close': () => { console.log('this will be called before the modal closes'); }
                })
            },

            hide() {
                this.$modal.hide('hello-world');
            },

            setActiveTravel(travel, country, link) {
                this.activeTravel = travel
                this.activeImages = country.images
                this.activeLink = link
                this.start = country.coords
                this.zoom = 6
                console.log(this.activeTravel)
                console.log(this.activeImages)
            }
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

    .top-bar {
        margin-top: 2%;
        height: 20%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .bottom-bar {
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .photo1-box {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: center;
        max-height: 450px;
    }

    .wrapper-box {
        width: 100%;
        height: 100%;
    }

    .button-box {
        margin: 1%;
    }

    .detail-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>