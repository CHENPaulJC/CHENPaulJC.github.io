var map = new BMap.Map("map");          // 创建地图实例  
map.centerAndZoom(new BMap.Point(120.19,30.26), 13);
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.setCurrentCity("杭州"); // 设置地图显
map.enableScrollWheelZoom(true);
var point = new BMap.Point(120.19,30.26);
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker);
marker.enableDragging();
marker.addEventListener("dragend", function(e) {
	alert(e.point.lng + ", " + e.point.lat);
});
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


var markerArr = [];
var transit = new BMap.TransitRoute(map, {
				renderOptions: {
					map: map,
					panel:"trans"
				}
			});
local.setMarkersSetCallback(function(pois) {
	for (var i = 0; i < pois.length; i++) {
		markerArr[i] = pois[i].marker;
		pois[i].marker.addEventListener("click", function(e) {
			transit.search("杭州市余杭区余杭塘路2318号", this.z.title);
			transit.clearResults();
		})
	}
})

var sign=[
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.016239,30.295862,"博文苑6号楼仓前图文制作部&菜鸟驿站"],
  [120.013208,30.29502,"田径场"],
  [120.015355,30.295605,"足球场"],
  [120.017924,30.29573, "恕园7号楼食堂"],
  [120.019127,30.296423,"恕园13号楼一鸣奶吧"],
];
var box = {
  width: 250,    
  height: 200, 
}

function mark(){
	for(var i = 0;i < sign.length;i++){
	var point= new BMap.Marker(new BMap.Point(sign[i][0],sign[i][1]));
	var address = sign[i][2];
	map.addOverlay(point);
	click(address,point);
}
}

function click(address,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var div=document.createElement("div");
	div.style.width='220px';
	div.style.height="150px";
	div.style.border = '1px solid black';
	var img = document.createElement('img');
	img.style.width='220px';
	img.style.height='150px';
	img.style.background="grey";
	div.append(img);
	div.append(address);
	var infoWindow = new BMap.InfoWindow(div,box);
	map.openInfoWindow(infoWindow,point);
	});
}

mark();
