Package.describe({
  name: 'herrhelms:meteor-leaflet-markercluster',
  summary: 'L.MarkerCluster/MarkerClusterGroup by @danzel ported to meteor',
  version: '0.0.1',
  git: 'https://github.com/herrhelms/meteor-leaflet-markercluster.git'
});
Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
  api.addFiles(['leaflet-markercluster.css','leaflet-markercluster.js'],'client');
});
