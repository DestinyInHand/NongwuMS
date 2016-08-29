
var PINGYUANIP = "http://localhost:" + 4000;
console.log(PINGYUANIP);
function getQueryStr(key){
  var lot = location.search;
  var reg = new RegExp(".*" + key + "\\s*=([^=&#]*)(?=&|#|).*","g");
  return decodeURIComponent(lot.replace(reg, "$1"));
};
