const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhcmVsbGkiLCJhIjoiY2ppbTVqeHl2MDBsdTNvcmY3d2NydjByYiJ9.F8thhfoz5AHas0ryPPGkqg';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
});
const marker = document.createElement('div');

marker.style.width = '32px';
marker.style.height = '39px';
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png";
new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);


console.log('Testing Our Trip Planner');
