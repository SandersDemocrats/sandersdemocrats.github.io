$(function(){
  $('#map').vectorMap({
    map: 'us_aea',
    backgroundColor: 'transparent',
    zoomOnScroll: false,
    regionsSelectable: true,
    regionsSelectableOne: true,
    regionStyle: {
      initial: {
        fill: 'white',
        "fill-opacity": 1,
        stroke: 'transparent',
        "stroke-width": 1,
        "stroke-opacity": 1
      },
      hover: {
        "fill-opacity": 0.8,
        cursor: 'pointer'
      },
      selected: {
        fill: 'transparent',
        stroke: '#fff',
        "transition": "all 0.3s;"
      },
    },
    onRegionSelected: function (event, code) {
      var map = $('#map').vectorMap('get', 'mapObject');
      var name = map.getRegionName(code);
      var name2 = name.toLowerCase();

      document.getElementById("candidate").innerHTML='<object type="text/html" data="states/' + name2 + '.html" ></object>';

      $(".overlay-bg").show();
      $(".overlay-bg").fadeIn(300);
      $(".magicbox").fadeIn(300);
      $(".magicbox").show();
      map.clearSelectedRegions();

      $(".overlay-bg").click(function(){
        $(".overlay-bg").fadeOut(300);
        $(".magicbox").hide();
      });
    },

  });
    $(".close").click(function(){
      $(".overlay-bg").fadeOut(300);
      $(".magicbox").hide();
    });

});
