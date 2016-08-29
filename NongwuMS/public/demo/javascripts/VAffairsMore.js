function getQueryStr(key){
  var lot = location.search;
  var reg = new RegExp(".*" + key + "\\s*=([^=&#]*)(?=&|#|).*","g");
  return decodeURIComponent(lot.replace(reg, "$1"));
}
  function parseTime(time){
    var date = new Date(parseInt(time));
    var year= date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year+"/"+month+"/"+day;
  }

$(document).ready(function() {
      $('.copyright').css({'top':window.screen.height});
  // var v_id;
  // $('#townandvillage').text(getQueryStr('town')+"/"+getQueryStr('village'));
  var v_id=getQueryStr('id');
  var v_tag = getQueryStr('tag');
  var v_tv =getQueryStr('tvs');
  console.log("tvs "+v_tv);
switch(v_tag){
  case "1":
    $('#t_v_s').text(v_tv+"/"+"党务公开");
    break;
  case "2":
    $('#t_v_s').text(v_tv+"/"+"事务公开");
    break;
  case "3":
    $('#t_v_s').text(v_tv+"/"+"财务公开");
    break;
  case "4":
    $('#t_v_s').text(v_tv+"/"+"惠农资金");
    break;
  default:
    break;
}

    $.getJSON(PINGYUANIP+"/web_con/more?id="+v_id+"&tag="+v_tag+"&lasttime="+0, function(result) {
    // Loop throgh each object inside country array

    $.each(result, function(key, data) {
      console.log("result is ",data.title);
      console.log("result is ",data.id);
      console.log("result is ",data.title);
        var tr = $('<tr/>');
          // tr.attr('class', field.Region);
          tr.append("<td>"+(key+1)+"</td>");
          tr.append("<td>" + data.title + "</td>");
          tr.append("<td>" + parseTime(data.uploadtime)+ "</td>");
          // tr.append("<td><a href=#>查看</a></td>");
          tr.append("<td><a href='"+"./VArticleDetail.html?id="+data.id+ "' target=_blank"+">查看</a></td>");
          $("#table").append(tr);
    });
  });
});
