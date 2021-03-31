<template>
  <div ref="map-root"
       style="width: 100%; height: 100%">
    <div ref="map-popup" id="popup" class="ol-popup">
      <div id="popup-content">{{markerText}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

      .ol-popup {
        position: absolute;
        background-color: white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 280px;
      }
      .ol-popup:after, .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }
      .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
      }
      .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
      }
      .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
      }
      .ol-popup-closer:after {
        content: "✖";
      }
</style>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import VectorLayer from 'ol/layer/Vector'
  import Overlay from 'ol/Overlay'
  import Point from 'ol/geom/Point'
  import OSM from 'ol/source/OSM'
  import {fromLonLat} from 'ol/proj'


  // importing the OpenLayers stylesheet is required for having
  // good looking buttons!
  import 'ol/ol.css'

  export default {
    name: 'MapContainer',
    components: {},
    props: {
      markerLat: {default: 0},
      markerLng: {default: 0},
      markerText: {default: ""}
    },
    mounted() {
      // var overlay = new VectorLayer('Overlay', {
      //     // styleMap: new OpenLayers.StyleMap({
      //     //     externalGraphic: '../img/marker.png',
      //     //     graphicWidth: 20, graphicHeight: 24, graphicYOffset: -24,
      //     //     title: '${tooltip}'
      //     // })
      // });

    var overlay = new Overlay({
      element: this.$refs['map-popup'],
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    overlay.setPosition(fromLonLat([this.markerLng, this.markerLat]));


      // var myLocation = new Point(this.markerLng, this.markerLat)
      //     .transform('EPSG:4326', 'EPSG:3857');
      // overlay.addFeatures([
      //     new OpenLayers.Feature.Vector(myLocation, {tooltip: 'OpenLayers'})
      // ]);

      // this is where we create the OpenLayers map
      new Map({
        // the map will be created using the 'map-root' ref
        target: this.$refs['map-root'],
        overlays: [overlay],
        layers: [
          // adding a background tiled layer
          new TileLayer({
            source: new OSM() // tiles are served by OpenStreetMap
          }),
        ],

        // the map view will initially show the whole world
        view: new View({
          zoom: 4,
          center: fromLonLat([this.markerLng, this.markerLat]),
          constrainResolution: true
        }),
      })
    },
  }
</script>
