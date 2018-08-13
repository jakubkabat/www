$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})
