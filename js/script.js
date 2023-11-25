function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.875887589005174, lng: -87.61892990185329 },
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.88315734286764, lng: -87.62849807716722 },
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Budlong Hot Chicken",
  });
  infowindow.open(map, marker);

  const icons = {
    thebudlong: {
      icon: "media/thebudlong.png",
    },
  };

  var features = [
    { position: { lat: 41.88315734286764, lng: -87.62849807716722 }, type: "thebudlong" },
  ];

  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

google.maps.event.addDomListener(window, 'load', initMap);