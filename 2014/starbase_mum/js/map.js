var map;

    require(["esri/map", "dojo/domReady!"], function(Map) { 
      map = new Map("mumMap", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
      });
    });
	    
	    

