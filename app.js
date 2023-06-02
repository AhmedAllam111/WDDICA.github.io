mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWQyMTI3OSIsImEiOiJjbGlhY21zcHgwMmZ4M2NwMzljOG0wOWw0In0.NoL407HZO7Bbv_onFBCBBw';

let loc = [14.432920703901994, 50.08725860834356]; // Prague City University coordinates

var map = new mapboxgl.Map({
    container: 'map',
    center: loc,
    zoom: 14,
    style: 'mapbox://styles/ahmed21279/cliactos802wr01qy2j8c5m0f'
});

map.on('load', function() {
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    let marker = document.createElement('div');
    marker.id = 'marker';

    let popup = new mapboxgl.Popup({ offset: 70 })
        .setHTML('<div id="hello">Prague City University</div>');

    new mapboxgl.Marker(marker, { anchor: 'bottom' })
        .setLngLat(loc)
        .addTo(map)
        .setPopup(popup);
});



