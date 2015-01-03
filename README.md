### meteor-leaflet-locatecontrol

This package ports »L.Control.Locate« ([v0.34.0](https://github.com/domoritz/leaflet-locatecontrol/releases/tag/v0.34.0)) by Dominik Moritz ([@domoritz](https://github.com/domoritz)) to your meteor project.
Read more about options and configuration at his github page for [leaflet-locatecontrol](https://github.com/domoritz/leaflet-locatecontrol/tree/v0.34.0). 

### basic usage

`meteor add herrhelms:meteor-leaflet-locatecontrol`

Remember to add any mapbox or leaflet package to your project in order to get the leaflet object (L). 
I've worked with `dfischer:meteor-mapbox` but there are a few others around.

### available options 
The locate control inherits options from other [leaflet controls](http://leafletjs.com/reference.html#control).

```js
	L.control.locate({
    	position: 'topleft',  // set the location of the control
    	drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
    	follow: false,  // follow the user's location
    	setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
    	keepCurrentZoomLevel: false, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
    	stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
    	remainActive: false, // if true locate control remains active on click even if the user's location is in view.
    	markerClass: L.circleMarker, // L.circleMarker or L.marker
    	circleStyle: {},  // change the style of the circle around the user's location
    	markerStyle: {},
    	followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
    	followMarkerStyle: {},
    	icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
    	iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
    	circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
    	metric: true,  // use metric or imperial units
    	onLocationError: function(err) {alert(err.message)},  // define an error callback function
    	onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
            alert(context.options.strings.outsideMapBoundsMsg);
    	},
    	showPopup: true, // display a popup when the user click on the inner marker
    	strings: {
        title: "Show me where I am",  // title of the locate control
        popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
        outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
    	},
    	locateOptions: {}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
	}).addTo(map);
```


 
