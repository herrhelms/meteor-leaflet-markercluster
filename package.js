Package.describe({
  name: 'herrhelms:meteor-leaflet-markercluster',
  summary: 'L.MarkerClusterGroup by @danzel ported to meteor',
  version: '0.0.2',
  git: 'https://github.com/herrhelms/meteor-leaflet-markercluster.git'
});
Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
  api.addFiles([
      'leaflet-markercluster.css',
      'leaflet-markercluster-default.css',
      'leaflet-markercluster.js'
  ], 'client');
});
