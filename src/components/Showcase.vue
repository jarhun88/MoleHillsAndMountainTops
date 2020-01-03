<template>
    <div class="showcase">
        <div class="top-bar">
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Korea, items.Korea)" rounded depressed class="button" width="150px" color=#C5C5C5>
                    Korea</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Japan, items.Japan)" rounded depressed class="button" width="150px" color=#C5C5C5>
                    Japan</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Peru, items.Peru)" rounded depressed class="button" width="150px" color=#C5C5C5>
                    Peru</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Thailand, items.Thailand)" rounded depressed class="button" width="150px"
                    color=#C5C5C5>Thailand</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Hawaii, items.Hawaii)" rounded depressed class="button" width="150px"
                    color=#C5C5C5>Hawaii</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Singapore, items.Singapore)" rounded depressed class="button" width="150px"
                    color=#C5C5C5>Singapore</v-btn>
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
                        <v-btn href="https://www.flickr.com/photos/182220016@N07/albums/72157710668016766" rounded
                            depressed class="button" width="150px" color=#C5C5C5>Gallery</v-btn>
                    </div>
                </div>
            </div>
        </div>
        <modals-container />
    </div>
</template>

<script>

    export default {
        name: 'Showcase',
        props: {
        },
        data() {
            return {
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
                    Korea: [
                        {
                            src: require('../images/korea2.jpg')
                        },
                        {
                            src: require('../images/korea3.jpg')
                        },
                    ],
                    Japan: [
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
                    Peru: [
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
                        }],
                    Thailand: [
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
                    Singapore: [
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
                    ],    
                },
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
            setActiveTravel(travel, images) {
                this.activeTravel = travel
                this.activeImages = images
                console.log(this.activeTravel)
                console.log(this.activeImages)
            }
        }
    }
</script>

<style scoped>
    .showcase {
        height: 100%;
        width: 100%;
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