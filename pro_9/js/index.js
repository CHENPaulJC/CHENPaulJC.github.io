var map = new BMap.Map("myMap");          // 创建地图实例  
map.centerAndZoom(new BMap.Point(120.19,30.26), 13);
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true,
    panel:"binguan"
  },
  onSearchComplete: function(binguan) {
		if (local.getStatus() == BMAP_STATUS_SUCCESS) {
			var s = [];
			for (var i = 0; i < binguan.getCurrentNumPois(); i++) {

			}
			
		}
	}
});
local.searchNearby("宾馆","西湖");

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "trans"
  }
});
transit.search("杭州市海曙路58号", "宾馆,西湖");