var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.875887589005174, lng: -87.61892990185329 },
    zoom: 12,
  });

  const icons = {
    budlong: {
      icon: "media/thebudlong.png"
    }
  }

  const features = [
    {
      position: new google.maps.LatLng(41.88315734286764, -87.62849807716722),
      type: "budlong",
    }
  ]

  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

initMap();