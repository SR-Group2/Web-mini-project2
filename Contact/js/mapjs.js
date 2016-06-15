var myCenter=new google.maps.LatLng(11.5446388,104.8585911);
  function myMap()
      {
      var mapProp = {
        center:myCenter,
       zoom:13,
          mapTypeId:google.maps.MapTypeId.ROADMAP
         };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker=new google.maps.Marker({
          position:myCenter,
        });
        marker.setMap(map);
      var infowindow = new google.maps.InfoWindow({
     content:"My Restaurant!"
      });
      infowindow.open(map,marker);
    }
google.maps.event.addDomListener(window, 'load', myMap);
