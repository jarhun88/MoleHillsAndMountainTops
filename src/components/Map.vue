<template>
    <div id="map" class="map">
        <GmapMap :center="start" :zoom="3" map-type-id="terrain" style="width: 90%; height: 80vh;" 
                 :options="options">
            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="toggleInfoWindow(m,index)" />
            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen"
                @closeclick="infoWinOpen=false">
                <div v-html="infoContent"></div>
            </gmap-info-window>
        </GmapMap>
    </div>

</template>

<script>


    export default {
        name: 'Map',

        data() {
            return {
                imgUrl: "./assets/logo.png",
                start: {
                    lat: 10.3157,
                    lng: 123.8854
                },
                options: {
                    // disableDefaultUI: true,
                    // scrollwheel: false,
                    minZoom: 3, 
                    maxZoom: 10,
                    // styles: [
                    //     {
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#f5f5f5"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "elementType": "labels.icon",
                    //         "stylers": [
                    //             {
                    //                 "visibility": "off"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#616161"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "elementType": "labels.text.stroke",
                    //         "stylers": [
                    //             {
                    //                 "color": "#f5f5f5"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "administrative.land_parcel",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#bdbdbd"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "poi",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#eeeeee"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "poi",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#757575"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "poi.park",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#e5e5e5"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "poi.park",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#9e9e9e"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "road",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#ffffff"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "road.arterial",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#757575"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "road.highway",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#dadada"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "road.highway",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#616161"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "road.local",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#9e9e9e"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "transit.line",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#e5e5e5"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "transit.station",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#eeeeee"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "water",
                    //         "elementType": "geometry",
                    //         "stylers": [
                    //             {
                    //                 "color": "#c9c9c9"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         "featureType": "water",
                    //         "elementType": "labels.text.fill",
                    //         "stylers": [
                    //             {
                    //                 "color": "#9e9e9e"
                    //             }
                    //         ]
                    //     }
                    // ]
                },
                markers: [{
                    position: {
                        name: "Abbotsford",
                        description: "description 1",
                        lat: 49.063042,
                        lng: -122.251350
                    },
                },
                {
                    position: {
                        name: "Vancouver",
                        description: "description ",
                        lat: 49.263569,
                        lng: -123.138573
                    }
                },
                {
                    position: {
                        name: "Busan",
                        description: "description ",
                        lat: 35.097000,
                        lng: 129.008102
                    }
                },
                {
                    position: {
                        name: "Seoul",
                        description: "description ",
                        lat: 37.566536,
                        lng: 126.977966
                    }
                },
                {
                    position: {
                        name: "Gyeungju",
                        description: "description ",
                        lat: 35.8562,
                        lng: 129.2247
                    }
                },
                {
                    position: {
                        name: "Pohang",
                        description: "description ",
                        lat: 36.0190,
                        lng: 129.3435
                    }
                },
                {
                    position: {
                        name: "Tongyeong",
                        description: "description ",
                        lat: 34.8544,
                        lng: 128.4332
                    }
                },
                {
                    position: {
                        name: "Tokyo",
                        description: "description ",
                        lat: 35.689487,
                        lng: 139.691711
                    }
                },
                {
                    position: {
                        name: "Osaka",
                        description: "description ",
                        lat: 34.6937,
                        lng: 135.5023
                    }
                },
                {
                    position: {
                        name: "Kyoto",
                        description: "description ",
                        lat: 35.0116,
                        lng: 135.7681
                    }
                },
                {
                    position: {
                        name: "Bangkok",
                        description: "description ",
                        lat: 13.756331,
                        lng: 100.501762
                    }
                },
                {
                    position: {
                        name: "Krabi",
                        description: "description ",
                        lat: 8.0855,
                        lng: 98.9063
                    }
                },
                {
                    position: {
                        name: "Phi Phi Islands",
                        description: "description ",
                        lat: 7.7407,
                        lng: 98.7784
                    }
                },
                {
                    position: {
                        name: "Singapore",
                        description: "description ",
                        lat: 1.352083,
                        lng: 103.819839
                    }
                },
                {
                    position: {
                        name: "Taipei",
                        description: "description ",
                        lat: 25.032969,
                        lng: 121.565414
                    }
                },
                {
                    position: {
                        name: "Honolulu",
                        description: "description ",
                        lat: 21.3069,
                        lng: 157.8583
                    }
                },
                {
                    position: {
                        name: "North Shore",
                        description: "description ",
                        lat: 21.5617,
                        lng: 158.0716
                    }
                },
                {
                    position: {
                        name: "Lima",
                        description: "description ",
                        lat: -12.046374,
                        lng: -77.042793
                    }
                },
                {
                    position: {
                        name: "Paracas",
                        description: "description ",
                        lat: -13.8409,
                        lng: -76.2508
                    }
                },
                {
                    position: {
                        name: "Huacachina",
                        description: "description ",
                        lat: -14.0875,
                        lng: -75.7626
                    }
                },
                {
                    position: {
                        name: "Arequipa",
                        description: "description ",
                        lat: -16.4090,
                        lng: -71.5375
                    }
                },
                {
                    position: {
                        name: "Cusco",
                        description: "description ",
                        lat: -13.5320,
                        lng: -71.9675
                    }
                },
                {
                    position: {
                        name: "Aguas Caliente",
                        description: "description ",
                        lat: -13.1547,
                        lng: -72.5254
                    }
                },
                ],

                infoContent: '',
                infoWindowPos: {
                    lat: 0,
                    lng: 0
                },
                infoWinOpen: false,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                }
            }
        },
        methods: {
            getPosition: function (marker) {
                return {
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.lng)
                }
            },

            toggleInfoWindow: function (marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoContent = this.getInfoWindowContent(marker);


                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }
            },

            getInfoWindowContent: function (marker) {
                return (`<div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">${marker.position.name}</p>
                      </div>
                    </div>
                    <div class="content">
                      ${marker.position.description}
                  </div>
                </div>`);
            }
        }
    }

</script>

<style>
    .map {
        display: flex;
        justify-content: center;
    }
</style>