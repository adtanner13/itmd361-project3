var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.875887589005174, lng: -87.61892990185329 },
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.88315734286764, lng: -87.62849807716722 },
    map: map,
  });
}

initMap();