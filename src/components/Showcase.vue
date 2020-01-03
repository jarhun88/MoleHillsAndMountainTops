<template>
    <div class="showcase">
        <div class="top-bar">
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Korea)" rounded depressed class="button" width="150px" color=#C5C5C5>Korea</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Japan)" rounded depressed class="button" width="150px" color=#C5C5C5>Japan</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Peru)" rounded depressed class="button" width="150px" color=#C5C5C5>Peru</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(SEAsia)" rounded depressed class="button" width="150px" color=#C5C5C5>SE Asia</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Hawaii)" rounded depressed class="button" width="150px" color=#C5C5C5>Hawaii</v-btn>
            </div>
            <div class="button-box">
                <v-btn v-on:click="setActiveTravel(Canada)" rounded depressed class="button" width="150px" color=#C5C5C5>Canada</v-btn>
            </div>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="bottom-bar">
            <div class="wrapper-box">
                <div class="photo1-box">
                    <v-carousel :show-arrows="false" height="100%" cycle hide-delimiter-background>
                        <v-carousel-item contain v-for="(item,i) in items" :key="i" :src="item.src">
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
                items: [
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
                    },
                ],

                activeTravel: this.Korea,
                Korea: "Korea",
                Japan: "Japan",
                Peru: "Peru",
                SEAsia: "SE Asia",
                Hawaii: "Hawaii",
                Canada: "Canada",

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
            setActiveTravel(travel) {
                this.activeTravel = travel
                console.log(this.activeTravel)
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