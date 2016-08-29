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
  // $('.copyright').css({'top':window.screen.height});
  var v_id=getQueryStr('id');
  var v_town = getQueryStr('town');
  var v_village = getQueryStr('village');
  var bdTextstring =v_town + v_village + "-来自："+ document.location.href;
  $('#townandvillage').text(v_town+"/"+v_village);

  $.getJSON(PINGYUANIP+"/web_con/list?id="+v_id, function(result) {
    // Loop throgh each object inside country array
    $.each(result, function(key, data) {
      // Loop throgh each object inside country array
      switch(key)
      {
        case "value_1":
        $.each(data, function(index, field) {
          console.log("01党务 "+field.title);
          // Build a table row and append to the only existing table
          tr = $('<tr/>');
          tr.append("<td>"+(index+1)+"</td>");
          tr.append("<td data-id=" + field.id + ">" + field.title + "</td>");
          tr.append("<td>" + parseTime(field.uploadtime) + "</td>");
          tr.append("<td><a href='"+"./VArticleDetail.html?id="+field.id+ "' target=_blank"+">查看</a></td>");
          $("#table1").append(tr);
        });
        break;

        case "value_2":
        $.each(data, function(index, field) {
          console.log("02村务 "+field.title);
          // Build a table row and append to the only existing table
          tr = $('<tr/>');
          // tr.attr('class', field.Region);
          tr.append("<td>"+(index+1)+"</td>");
          tr.append("<td data-id=" + field.id + ">" + field.title + "</td>");
          tr.append("<td>" + parseTime(field.uploadtime) + "</td>");
          tr.append("<td><a href='"+"./VArticleDetail.html?id="+field.id+ "' target=_blank"+">查看</a></td>");
          $("#table2").append(tr);
        });
        break;

        case "value_3":
        $.each(data, function(index, field) {
          console.log("03财务 "+field.title);
          // Build a table row and append to the only existing table
          tr = $('<tr/>');
          // tr.attr('class', field.Region);
          tr.append("<td>"+(index+1)+"</td>");
          tr.append("<td data-id=" + field.id + ">" + field.title + "</td>");
          tr.append("<td>" + parseTime(field.uploadtime)+ "</td>");
          tr.append("<td><a href='"+"./VArticleDetail.html?id="+field.id+ "' target=_blank"+">查看</a></td>");
          $("#table3").append(tr);
        });
        break;

        case "value_4":
        $.each(data, function(index, field) {
          console.log("04惠农 "+field.title);
          // Build a table row and append to the only existing table
          tr = $('<tr/>');
          // tr.attr('class', field.Region);
          tr.append("<td>"+(index+1)+"</td>");
          tr.append("<td data-id=" + field.id + ">" + field.title + "</td>");
          tr.append("<td>" + parseTime(field.uploadtime) + "</td>");
          tr.append("<td><a href='"+"./VArticleDetail.html?id="+field.id+ "' target=_blank"+">查看</a></td>");
          $("#table4").append(tr);
        });
        break;

        default:
        break;
      }
    });
  });

  window._bd_share_config={
    "common":{
      "bdSnsKey":{},
      "bdText":bdTextstring,
      "bdMini":"1",
      "bdMiniList":["tsina","weixin","qzone","tqq","tieba","copy","print"],
      "bdPic":"","bdStyle":"0","bdSize":"16"},
    "slide":{"type":"slide","bdImg":"3","bdPos":"right","bdTop":"180"}};
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

  $('h6').click(function(){
    // alert($(this).text());
    window.location="./VAffairsMore.html?id="+v_id+"&tag="+$(this).data('tag')+
    "&tvs="+v_town+"/"+v_village;
  });


});
