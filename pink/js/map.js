ymaps.ready(init);
var myMap, 
myPlacemark;

function init(){ 
 myMap = new ymaps.Map("map", {
 center: [59.936192, 30.321195], zoom: 17
 }); 
 myPlacemark = new ymaps.Placemark([59.936192, 30.321195], {
  hintContent: 'Pink',
  balloonContent: '',
  initColor:'red'
  });
 myMap.geoObjects.add(myPlacemark);
}