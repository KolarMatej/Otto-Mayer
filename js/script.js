 AOS.init();

var typed = new Typed(".jumbotype", {
  loop: false,
  startDelay: 700,
  typeSpeed: 50,
  showCursor: false,
  loop: true,
  loopCount: Infinity,
  backSpeed: 50,
   backDelay: 1000,
  strings: ["Sanitär", "Heizung", "Spenglerei"]
});

function initMap() {
  // The location of Uluru
  var uluru = {lat: 48.334980, lng: 10.743225};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map-container'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
