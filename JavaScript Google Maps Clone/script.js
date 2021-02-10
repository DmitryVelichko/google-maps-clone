mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJ5MTk4OTIwMjEiLCJhIjoiY2trejRxOXZqMDhzZDJ2cGU4azNvbGJpbSJ9.u7MD6QMX70VJ6w64CdMOpQ';


// API that allows to get current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})


function successLocation(position) {
    console.log(position)
    // zoom in to certain location
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    //default location(Manchester)
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
})
    // navigation and directions support
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

map.addControl(directions, 'top-left')
}


    