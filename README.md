### meteor-leaflet-markercluster

This package ports »L.MarkerClusterGroup« ([v0.4.0](https://github.com/Leaflet/Leaflet.markercluster/releases/tag/v0.4.0)) by Dave Leaver ([@danzel](https://github.com/danzel)) to your meteor project.
Read more about options and configuration at the leaflet github page for [leaflet-markercluster](https://github.com/Leaflet/Leaflet.markercluster).

### basic usage

`meteor add herrhelms:meteor-leaflet-markercluster`

Remember to add any mapbox or leaflet package to your project in order to get the leaflet object (L).
I've worked with `dfischer:meteor-mapbox` but there are a few others around.

### add a clustergroup to your map

Create a new MarkerClusterGroup, add your markers to it, then add it to the map

```js
var markers = new L.MarkerClusterGroup();
markers.addLayer(new L.Marker(getRandomLatLng(map)));
// Add more layers...
map.addLayer(markers);
```

Read the full documentation of L.MarkerClusterGroup [here](https://github.com/Leaflet/Leaflet.markercluster).
