//Google Map
google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
    var uluru = {lat: 39.1176415, lng: -76.8864909};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

// function init() {
//     var mapOptions = {
//         center: new google.maps.LatLng(39.2037, 76.8610),
//         zoom: 3,
//         zoomControl: true,
//         zoomControlOptions: {
//             style: google.maps.ZoomControlStyle.SMALL,
//         },
//         disableDoubleClickZoom: true,
//         mapTypeControl: true,
//         mapTypeControlOptions: {
//             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//         },
//         scaleControl: true,
//         scrollwheel: false,
//         panControl: true,
//         streetViewControl: true,
//         draggable: true,
//         overviewMapControl: true,
//         overviewMapControlOptions: {
//             opened: false,
//         },
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         styles: [{"featureType": "landscape", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"stylers": [{"hue": "#00aaff"}, {"saturation": -100}, {"gamma": 2.15}, {"lightness": 12}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"visibility": "on"}, {"lightness": 24}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 57}]}],
//     }
//     var mapElement = document.getElementById('map');
//     var map = new google.maps.Map(mapElement, mapOptions);
// }

